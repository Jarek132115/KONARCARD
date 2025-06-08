const BusinessCard = require('../models/BusinessCard');
const { PutObjectCommand, S3Client } = require('@aws-sdk/client-s3');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const multer = require('multer');
require('dotenv').config();

// AWS S3 config
const s3 = new S3Client({
  region: process.env.BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

// Multer setup (same as used in user controller)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ✅ Attach upload to export so it can be used in the route
const uploadCoverPhoto = upload.single('cover_photo');

// Create or Update Business Card
const createOrUpdateBusinessCard = async (req, res) => {
  try {
    const {
      business_card_name,
      page_theme,
      style,
      main_heading,
      sub_heading
    } = req.body;

    const userId = req.user?.id || req.user?._id || req.body.user;

    let coverPhotoUrl = null;

    if (req.file) {
      const ext = path.extname(req.file.originalname);
      const key = `business_cards/${uuidv4()}${ext}`;

      const uploadParams = {
        Bucket: process.env.BUCKET_NAME,
        Key: key,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
      };

      await s3.send(new PutObjectCommand(uploadParams));

      coverPhotoUrl = `https://${process.env.BUCKET_NAME}.s3.${process.env.BUCKET_REGION}.amazonaws.com/${key}`;
    }

    const updateData = {
      business_card_name,
      page_theme,
      style,
      main_heading,
      sub_heading,
    };

    if (coverPhotoUrl) updateData.cover_photo = coverPhotoUrl;

    const card = await BusinessCard.findOneAndUpdate(
      { user: userId },
      updateData,
      { new: true, upsert: true }
    );

    res.status(200).json({ message: "Business card saved successfully", data: card });
  } catch (error) {
    console.error("Error saving business card:", error);
    res.status(500).json({ error: "Failed to save business card" });
  }
};


// Get Business Card by User ID
const getBusinessCardByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;

    const card = await BusinessCard.findOne({ user: userId });

    if (!card) {
      return res.status(404).json({ message: "Business card not found for this user" });
    }

    res.status(200).json({ data: card });
  } catch (error) {
    console.error("Error fetching business card:", error);
    res.status(500).json({ error: "Failed to fetch business card" });
  }
};

module.exports = {
  createOrUpdateBusinessCard,
  uploadCoverPhoto,
  getBusinessCardByUserId,  // export new controller
};
