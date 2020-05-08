const mongoose = require('mongoose');

const techsSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

module.exports = mongoose.model('Techs', techsSchema);
