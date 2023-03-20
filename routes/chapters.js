import express from "express";
import createChapter from "../controllers/chapters/create.js"
import schema from "../schemas/chapters.js";
import validator from "../middlewares/validator.js"
import passport from "../middlewares/passport.js";
import nextOrder from "../middlewares/chapters/next_order.js";
import orderExist from "../middlewares/chapters/exist_order.js";
import addFrontPhoto from "../middlewares/chapters/add_front_photo.js";
import read_all_controller from "../controllers/chapters/read_all.js";
import get_one_controller from "../controllers/chapters/get_one.js";
import getChapter from "../controllers/chapters/get_chapter.js"
import editChapter from "../schemas/editChapter.js"
import finds_id from "../middlewares/auth/finds_id.js";
import is_active from "../middlewares/authors/is_active.js";
import chapter_is_property_of from "../middlewares/authors/chapter_is_property_of.js";
import update_controller from "../controllers/chapters/update.js"
import destroy_controller from "../controllers/chapters/destroy.js"



let router = express.Router()

const { create } = createChapter
const { get_chapter } = getChapter
const {read_all} = read_all_controller
const {get_one} = get_one_controller
const { update } = update_controller
const { destroy } = destroy_controller

router.get("/:id", get_one );
router.get("/all/:id", read_all)
router.get('/', passport.authenticate('jwt', { session: false }), get_chapter);

router.put('/:id', passport.authenticate('jwt', { session: false }), validator(editChapter), finds_id, is_active, chapter_is_property_of, update)
router.delete('/:id', passport.authenticate('jwt', { session: false }), finds_id, is_active, chapter_is_property_of, destroy)

router.post("/", passport.authenticate("jwt",{session:false} ), validator(schema), orderExist, nextOrder, addFrontPhoto,create)


export default router
