const mongoose = require('mongoose');
const { Schema } = mongoose;

const businessCardSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  business_card_name: { type: String, required: true },
  page_theme: { type: String, enum: ['light', 'dark'], default: 'light' },
  style: { type: String, enum: ['Inter', 'Montserrat', 'Poppins'], default: 'Inter' },
  cover_photo: { type: String },
  main_heading: { type: String },
  sub_heading: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('BusinessCard', businessCardSchema);
