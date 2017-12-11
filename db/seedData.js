var mongoose = require('mongoose');
var Profile = require('../src/models/Profile.js');

//create a script in your package json that runs the script for your seed data
//outline that in the readme
console.log('IN SEED DATA')

mongoose.connect('mongodb://localhost/profiles')

var Misha = new Profile ({
  photo: 'misha',
  name: 'Misha',
  description: 'Hi! Nice to meet you.'
})

var Oprah = new Profile ({
  photo: 'oprah',
  name: 'Oprah',
  description: 'Killin it!'
})

var Hillary = new Profile ({
  photo: 'hillary',
  name: 'Hillary',
  description: 'Nasty Gal.'
})

var Michelle = new Profile ({
  photo: 'michelle',
  name: 'Michelle',
  description: 'Classy lady.'
})


Misha.save(function(err, data) {
  if (err) {
    console.log('ERROR', err);
  } else {
    console.log('DATA SAVED', data);
  }
}).then(() => mongoose.disconnect())
