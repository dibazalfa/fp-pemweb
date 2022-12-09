import express from "express";
import { db, auth} from "./config.js";
import bodyparser from "body-parser";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import randomstring from "randomstring";
// import * as validurl from "valid-url";
import cors from "cors";

const app = express();
app.use(bodyparser.json());
app.use(cors());
const port = process.env.PORT || 3000;

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(auth, email, password);
    const user = await createUserWithEmailAndPassword(auth, email, password);
    res.status(200).json({ 
        message: "User created successfully" 
    });
  } catch (error) {
    res.status(400).json({ 
        message: error.message 
    });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(email, password);
    const user = await signInWithEmailAndPassword(auth, email, password);
    res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/link", (req, res) => {
  try {
    var long = req.body.long;
    var short = req.body.short;

    db.collection("links").add({
      long: long,
      short: short,
    });

    res.send({
      status: true,
      message: "Data berhasil disimpan",
    });
  } catch (error) {
    res.send({
      status: false,
      message: "Data gagal disimpan",
    });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });