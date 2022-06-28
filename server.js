const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { OAuth2Client } = require('google-auth-library');

dotenv.config();
const client = new OAuth2Client("706190860947-v0k1rh5m3dvhntrh5nb7k9vov85bgrb6.apps.googleusercontent.com", "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","http://localhost:3000/home");

const app = express();
app.use(express.json());

const users = [];

users.push({name: "Aaron Robins", email: "arobins.15@gmail.com"});
console.log(users);

function upsert(array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}

function addUser(array, item) {
  array.push(item);
}

function userExists (array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) return true;
  else return false;
}

app.post('/api/purchase', (req, res) => {
const body = req.body;
const user = body.user;
const weight = body.weight;
const dollars = body.dollars;
const date = body.date;
}


)

app.post('/api/google-login', async (req, res) => {
  
  userDetails = null;
  const {logintype} = req.body;

  if (logintype == 'google') {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "706190860947-v0k1rh5m3dvhntrh5nb7k9vov85bgrb6.apps.googleusercontent.com",
    });
    userDetails = ticket.getPayload();
  }

  else {
    userDetails = req.body;
    console.log(userDetails)
  }

  const { name, email, picture } = userDetails;
  


  //check if user exists
  if (userExists(users, { name, email, picture })) {
    res.status(201);
    res.json({ name, email, picture });
  }  
  else {
    res.status(401);
    res.json("incorrect username or password")
  }
});



app.listen(process.env.PORT || 9999, () => {
  console.log(
    `Server is ready at http://localhost:${process.env.PORT || 9999}`
  );
});
