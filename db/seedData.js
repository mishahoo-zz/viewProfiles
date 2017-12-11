var mongoose = require('mongoose');
var Profile = require('./profileSchema.js');

//create a script in your package json that runs the script for your seed data
//outline that in the readme

var Misha = new Profile ({
  photo: 'Misha',
  name: 'Misha',
  description: 'blah blah blah'
})

Misha.save(function(err, data) {
  if (err) {
    console.log('ERROR', err);
  } else {
    console.log('DATA SAVED', data);
  }
});
