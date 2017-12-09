var mongoose = require('mongoose');

var Profile = mongoose.Schema({
  photo: { type: String },
  name: { type: String },
  description: { type: String }
});

module.exports = mongoose.model('Profile', Profile);
