import express from "express"
import schemaUpdate from '../schemas/update.js'
import getMe from '../controllers/authors/get_me.js'
import updateController from '../controllers/authors/update.js'
import validator from "../middlewares/validator.js"
import passport from "../middlewares/passport.js"

const {get_me} = getMe
const {update} = updateController

let router = express.Router()


router.get("/me", passport.authenticate("jwt", {session: false}), get_me)
router.put("/me",passport.authenticate("jwt", {session: false}), validator(schemaUpdate), update );

export default router