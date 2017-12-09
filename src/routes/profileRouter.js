var express = require('express');
var app = express();
var profileRouter = express.Router();

// Require Profile model in our routes module
var Profile = require('../models/Profile');

// Defined store route
profileRouter.route('/add').post(function (req, res) {
  var profile = new Profile(req.body);
      profile.save()
    .then(profile => {
    res.json('Profile added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined edit route
profileRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Profile.findById(id, function (err, profile){
      res.json(profile);
  });
});

//  Defined update route
profileRouter.route('/update/:id').post(function (req, res) {
  Profile.findById(req.params.id, function(err, profile) {
    if (!profile)
      return next(new Error('Could not find profile'));
    else {
      // do your updates here
      profile.profile = req.body.profile;

      profile.save().then(profile => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});


module.exports = profileRouter;
