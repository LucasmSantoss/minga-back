import express from "express";
import mangaCreate from "../schemas/mangas.js";
import validator from "../middlewares/validator.js"
import controller from "../controllers/mangas/create.js"
import exist_title from "../middlewares/manga/exist_title.js"
import getOne from '../controllers/mangas/get_one.js'
import get_controller from "../controllers/mangas/get_mangas.js"
import passport from "../middlewares/passport.js";
import updateMangas from '../controllers/mangas/update.js'
import destroyMangas from '../controllers/mangas/destroy.js'
import updateMangaSchema from '../schemas/updateMangas.js'
import getMeMangas from '../controllers/mangas/get_me.js'

const { create } = controller
const { get_one } = getOne
const { get_me } = getMeMangas
const { update } = updateMangas
const { destroy } = destroyMangas
const { read } = get_controller



let router = express.Router();


router.post("/",passport.authenticate("jwt", {session: false}), validator(mangaCreate), exist_title, create)
router.get("/", passport.authenticate('jwt', {session:false}), read)
router.get("/me", passport.authenticate("jwt", { session: false }), get_me)
router.get("/:id", get_one);
router.delete('/:id', passport.authenticate('jwt', { session: false }),  destroy)
router.put('/:id', passport.authenticate('jwt', { session: false }), validator(updateMangaSchema), update)



export default router;