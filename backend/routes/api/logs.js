const express = require('express');
const router = express.Router();

const Logs = require('../../models/Logs');

router.get('/', async (req, res) => {
  try {
    const logs = await Logs.find();

    res.json(logs);
  } catch (error) {
    console.log(`Error while getting logs:- ${error.message}`);
    res.status(500).send('Server Error');
  }
});

router.post('/', async (req, res) => {
  try {
    const { message, attention, tech, date } = req.body;

    const newLogs = new Logs({
      message,
      attention,
      tech,
      date,
    });

    const logs = await newLogs.save();
    res.json(logs);
  } catch (error) {
    console.log(`Error while adding logs:- ${error.message}`);
    res.status(500).send('Server Error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletetelog = await Logs.findByIdAndDelete(req.params.id);
    res.json(deletetelog);
  } catch (error) {
    console.log('Error while deleting techs ', error.message);
    res.status(500).send('Server Error');
  }
});

router.put('/:id', async (req, res) => {
  const { message, attention, tech, date } = req.body;
  const updateField = {};

  if (message) updateField.message = message;
  if (attention) updateField.attention = attention;
  if (tech) updateField.tech = tech;
  if (date) updateField.date = date;
  try {
    const logs = await Logs.findByIdAndUpdate(
      req.params.id,
      { $set: updateField },
      { new: true }
    );

    res.json(logs);
  } catch (error) {
    console.log('Error while updating techs ', error.message);
    res.status(500).send('Server Error');
  }
});

router.get('/:text', async (req, res) => {
  try {
    var nameRegex = {
      $regex: new RegExp('^' + req.params.text.toLowerCase(), 'i'),
    };
    const logs = await Logs.find({ message: nameRegex });

    res.json(logs);
  } catch (error) {
    console.log(`Error while getting logs:- ${error.message}`);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
