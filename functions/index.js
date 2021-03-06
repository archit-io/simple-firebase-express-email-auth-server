const functions = require('firebase-functions');
const app = require('express')();
const FBAuth = require('./util/fbAuth');

const cors = require('cors');
app.use(cors());

const { db } = require('./util/admin');

const {
  signup,
  login
} = require('./handlers/users');


// users routes
app.post('/signup', signup);
app.post('/login', login);

exports.api = functions.region('asia-south1').https.onRequest(app);