import express from "express";

import mangaCreate from "../schemas/mangas.js";
import validator from "../middlewares/validator.js"
import controller from "../controllers/mangas/create.js"
import exist_title from "../middlewares/manga/exist_title.js"
import getOne from '../controllers/mangas/get_one.js'
import get_controller from "../controllers/mangas/get_mangas.js"
import passport from "../middlewares/chapters/passport.js";
import updateMangas from '../controllers/mangas/update.js'
import destroyMangas from '../controllers/mangas/destroy.js'
import finds_id from '../middlewares/auth/finds_id.js'
import updateMangaSchema from '../schemas/updateMangas.js'
import getMeMangas from '../controllers/mangas/get_me.js'

const {read } = get_controller
const {create} = controller
const { get_one } = getOne
const { read_me } = getMeMangas
const { update } = updateMangas
const { destroy } = destroyMangas

let router = express.Router();

router.get("/", passport.authenticate('jwt', {session:false}), read)
router.post("/", validator(mangaCreate), exist_title, create)
router.get("/:id",get_one);
router.delete('/:id', passport.authenticate('jwt', { session: false }), finds_id, destroy)
router.put('/:id', passport.authenticate('jwt', { session: false }), validator(updateMangaSchema),finds_id, update)
router.get('/me', passport.authenticate('jwt', { session: false }), finds_id, read_me)
export default router;