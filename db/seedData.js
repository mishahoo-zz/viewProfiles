var mongoose = require('mongoose');
var Profile = require('./profileSchema.js');


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
