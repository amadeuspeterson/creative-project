const express = require("express");
const mongoose = require('mongoose');

const router = express.Router();

//
// User schema and model
//

// This is the schema. Users have usernames and passwords. We solemnly promise to
// salt and hash the password!
const profileSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  reaction: String
});

// create a User model from the User schema
const Profile = mongoose.model('Profile', profileSchema);

//API Endpoints

// create a new reaction
router.post('/', async (req, res) => {
  // Make sure that the form coming from the browser includes all required fields,
  // otherwise return an error. A 400 error means the request was
  // malformed.
  if (!req.body.reaction)
    return res.status(400).send({
      message: "Please enter reaction"
    });

  try {
    // create a new comment and save it to the database
    const profile = new Profile({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      reaction: req.body.reaction
    });
    await profile.save();
    // send back a 200 OK response, along with the user that was created
    return res.send(profile);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

