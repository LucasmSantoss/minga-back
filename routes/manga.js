import express from "express";
import mangaCreate from "../schemas/mangas.js";
import validator from "../middlewares/validator.js"
import controller from "../controller/mangas/create.js"
import exist_title from "../middlewares/manga/exist_title.js"
import allController from '../controller/category/all.js'
const {create} = controller
const { all } = allController

let router = express.Router();


router.post("/", validator(mangaCreate), exist_title, create)
router.get('/', all)

export default router;