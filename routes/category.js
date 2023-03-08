
import express from "express";
import Category from '../models/Category.js';


let router = express.Router();

/* GET users listing. */
router.get("/", async (req, res) => {
   await Category.find().then(data => res.json({data})).catch(error => res.json({error}))
  });

export default router;