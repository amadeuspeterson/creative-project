const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/profile', {
  useNewUrlParser: true
});

const profileSchema = new mongoose.Schema({
  name: String,
  favNBA: String,
  favMLB: String,
  favNFL: String,
});

const Profile = mongoose.model('Profile', profileSchema);














const users = require("./users.js");
app.use("/api/users", users.routes);


app.listen(3000, () => console.log('Server listening on port 3000!'));
