import express from "express";
import mangaCreate from "../schemas/mangaCreate.js";
import validator from "../middlewares/validator.js"
import controller from "../controller/mangas/create.js"
import exist_title from "../middlewares/manga/exist_title.js"
const {create} = controller

let router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(200).send("New Manga");
});
router.post("/", validator(mangaCreate), exist_title, create)

export default router;