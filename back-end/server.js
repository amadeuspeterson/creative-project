const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/sports', {
  useNewUrlParser: true
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cookieSession = require('cookie-session');
app.use(cookieSession({
    name: 'session',
    keys: ['secretValue'],
    cookie: {
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));



//const profile = require("./profile.js");
//app.use("/api/users", profile.routes);

const users = require("./users.js");
app.use("/api/users", users.routes);


app.listen(3000, () => console.log('Server listening on port 3000!'));
