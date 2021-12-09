const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const serviceAccount = require("./firebase.config.json");

const app = express();

app.use(cors());
app.use(express.json());

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://quiz-dev-d120e-default-rtdb.asia-southeast1.firebasedatabase.app",
});

app.get("/", (req, res) => {
  admin
    .auth()
    .listUsers(1000)
    .then((listUsersResult) => {
      res.json(listUsersResult.users);
    })
    .catch((error) => {
      console.log("Error listing users:", error);
    });
});

app.listen(4000);
