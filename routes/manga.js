import express from "express";
import mangaCreate from "../schemas/mangas.js";
import validator from "../middlewares/validator.js"
import controller from "../controllers/mangas/create.js"
import exist_title from "../middlewares/manga/exist_title.js"
import passport from "../middlewares/passport.js";
import getController from "../controllers/mangas/get_mangas.js"


const { create } = controller
const { read } = getController

let router = express.Router();


router.post("/",passport.authenticate("jwt", {session: false}), validator(mangaCreate), exist_title, create)

router.get("/", passport.authenticate('jwt', {session:false}), read)

export default router;