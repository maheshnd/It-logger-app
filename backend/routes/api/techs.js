const express = require('express');
const router = express.Router();

const Techs = require('../../models/Techs');

router.get('/', async (req, res) => {
  try {
    const techs = await Techs.find();
    res.json(techs);
  } catch (error) {
    console.log('Error whiel getting techs');
    res.status(500).send('Server Error');
  }
});

router.post('/', async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    const newtechs = new Techs({
      firstName,
      lastName,
    });

    const techs = await newtechs.save();
    res.json(techs);
  } catch (error) {
    console.log('Error while adding techs ', error.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletetech = await Techs.findByIdAndDelete(req.params.id);
    res.json(deletetech);
  } catch (error) {
    console.log('Error while deleting techs ', error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
