import express from "express"
import schemaUpdate from '../schemas/update.js'
import getMe from '../controllers/authors/get_me.js'
import updateController from '../controllers/authors/update.js'
import validator from "../middlewares/validator.js"
import passport from "../middlewares/passport.js"
import controller from '../controllers/authors/create.js';
import readController from '../controllers/authors/get_one.js'
import schemaAuthors from '../schemas/authors.js'

const {get_me} = getMe
const {update} = updateController
const {create} = controller
const {read_one} = readController

let router = express.Router()

router.get("/me", passport.authenticate("jwt", {session: false}), get_me)
router.get('/:id', passport.authenticate("jwt", { session:false }), read_one)

router.post('/', passport.authenticate("jwt", { session:false }), validator(schemaAuthors), create)

router.put("/me",passport.authenticate("jwt", {session: false}), validator(schemaUpdate), update );

export default router