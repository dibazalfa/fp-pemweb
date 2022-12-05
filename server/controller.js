import express from "express";
import bodyParser from "body-parser";
import { db, auth } from "./config.js";

const router = express.Router();
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/users", (req, res) => {
  try {
    var nama = req.body.nama;
    var email = req.body.email;
    var password = req.body.password;

    db.collection("users").add({
      nama: nama,
      email: email,
      password: password
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

router.get("/users", (req, res) => {
  try {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        let users = [];
        let id;
        querySnapshot.forEach((doc) => {
          id = doc.id;
          users.push({ id, ...doc.data() });
        });
        res.send(users);
      });
  } catch (error) {
    res.send(error);
  }
});

export default router;