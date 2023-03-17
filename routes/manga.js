import express from "express";
import mangaCreate from "../schemas/mangas.js";
import validator from "../middlewares/validator.js"
import controller from "../controllers/mangas/create.js"
import exist_title from "../middlewares/manga/exist_title.js"
import getOne from '../controllers/mangas/get_one.js'
import get_controller from "../controllers/mangas/get_mangas.js"
import passport from "../middlewares/chapters/passport.js";


const {read } = get_controller
const {create} = controller
const {get_one} = getOne

let router = express.Router();

router.get("/", passport.authenticate('jwt', {session:false}), read)
router.post("/", validator(mangaCreate), exist_title, create)
router.get("/:id",get_one);

export default router;