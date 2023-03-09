import express from "express";
import mangaCreate from "../schemas/mangas.js";
import validator from "../middlewares/validator.js"
import controller from "../controllers/mangas/create.js"
import exist_title from "../middlewares/manga/exist_title.js"
import getOne from '../controllers/mangas/get_one.js'
const {create} = controller


let router = express.Router();


router.post("/", validator(mangaCreate), exist_title, create)
router.get("/:id",getOne);

export default router;