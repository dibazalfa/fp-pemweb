import express from "express";
import bodyParser from "body-parser";
import { db, auth } from "./config.js";

const router = express.Router();
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("Hello World!");
});

export default router;