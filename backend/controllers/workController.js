const Work = require('../models/Work');

exports.createWork = async (req, res) => {
  try {
    const work = await Work.create(req.body);
    res.status(201).json(work);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllWorks = async (req, res) => {
  try {
    const works = await Work.find().populate('user');
    res.json(works);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getWorkById = async (req, res) => {
  try {
    const work = await Work.findById(req.params.id).populate('user');
    if (!work) return res.status(404).json({ message: 'Work not found' });
    res.json(work);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ALL SERVICES BY USER ID
exports.getWorkByUserId = async (req, res) => {
  try {
    const services = await Work.find({ user: req.params.userid }).populate('user');
    if (!services || services.length === 0)
      return res.status(404).json({ message: "No services found for this user" });

    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateWork = async (req, res) => {
  try {
    const work = await Work.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!work) return res.status(404).json({ message: 'Work not found' });
    res.json(work);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteWork = async (req, res) => {
  try {
    const work = await Work.findByIdAndDelete(req.params.id);
    if (!work) return res.status(404).json({ message: 'Work not found' });
    res.json({ message: 'Work deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
