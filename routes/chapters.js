import express from "express";
import createChapter from "../controllers/chapters/create.js"
import schema from "../schemas/chapters/chapters.js";
import validator from "../middlewares/validator.js"
import passport from "../middlewares/passport.js";
import nextOrder from "../middlewares/chapters/next_order.js";
import orderExist from "../middlewares/chapters/exist_order.js";
import addFrontPhoto from "../middlewares/chapters/add_front_photo.js";

let router = express.Router()

const { create } = createChapter

router.post("/", /* passport.authenticate("jwt",{session:false} ) */ validator(schema), orderExist, nextOrder, addFrontPhoto,create)

export default router