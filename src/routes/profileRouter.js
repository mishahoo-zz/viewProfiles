var express = require('express');
var app = express();
var profileRouter = express.Router();

var multer  = require('multer')
var upload = multer({ dest: 'public/images' })

// Require Profile model in our routes module
var Profile = require('../models/Profile');

// Defined get data(index or listing) route
profileRouter.route('/').get(function (req, res) {
  Profile.find(function (err, itms){
    if(err){
      console.log(err);
    }
    else {
      res.json(itms);
    }
  });
});

// Defined store route
// Add multer middleware!!!!
profileRouter.route('/add').post( upload.single('photo'), function (req, res) {
  console.log('in server add user route', req.body, req.file.filename);
  var profile = new Profile({...req.body, photo: req.file.filename});
      profile.save()
    .then(profile => {
    res.json(profile);
    console.log("profile successfully added")
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
profileRouter.route('/update/:id').post( upload.single('photo'), function (req, res) {
  console.log('in server update route', req.body, req.file.filename);
  Profile.findById(req.params.id, function(err, profile) {
    if (!profile)
      return next(new Error('Could not find profile'));
    else {
      // do your updates here
      console.log('profile was found', profile);
      console.log('req.body', req.body);

      profile.photo = req.file.filename;
      profile.name = req.body.name;
      profile.description = req.body.description;

      profile.save().then(profile => {
          res.json(profile);
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
profileRouter.route('/delete/:id').get(function (req, res) {
  Profile.findByIdAndRemove({_id: req.params.id},
       function(err, profile){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


module.exports = profileRouter;
