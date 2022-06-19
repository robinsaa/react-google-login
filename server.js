const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { OAuth2Client } = require('google-auth-library');

dotenv.config();
const client = new OAuth2Client("706190860947-v0k1rh5m3dvhntrh5nb7k9vov85bgrb6.apps.googleusercontent.com", "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","http://localhost:3000/home");

const app = express();
app.use(express.json());

const users = [];

function upsert(array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}

app.post('/api/google-login', async (req, res) => {
  console.log("here")
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: "706190860947-v0k1rh5m3dvhntrh5nb7k9vov85bgrb6.apps.googleusercontent.com",
  });
  const { name, email, picture } = ticket.getPayload();
  upsert(users, { name, email, picture });
  res.status(201);
  res.json({ name, email, picture });
  console.log(users)
});



app.listen(process.env.PORT || 9999, () => {
  console.log(
    `Server is ready at http://localhost:${process.env.PORT || 9999}`
  );
});
