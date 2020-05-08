const mongoose = require('mongoose');

const losgsSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  attention: {
    type: Boolean,
  },
  tech: {
    type: String,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model('Logs', losgsSchema);
