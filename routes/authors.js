import express from 'express'
import controller from '../controllers/authors/create.js';
import readController from '../controllers/authors/get_one.js'
import finds_id from '../middlewares/auth/finds_id.js';
import passport from '../middlewares/passport.js';
import validator from '../middlewares/validator.js';
import schemaAuthors from '../schemas/authors.js'
import updateActive from '../controllers/authors/update_active.js'
import readAll from '../controllers/authors/read_all_active.js'
import meController from '../controllers/authors/get_me.js'
import read_allController from '../controllers/authors/read_all.js'
import is_active from "../middlewares/authors/is_active.js";
import updateController from '../controllers/authors/update.js'
import schemaUpdate from '../schemas/authorsUpdate.js';
import alreadyExists from '../middlewares/authors/alreadyExists.js';


const { me } = meController;
const {create} = controller
const {read_one} = readController

const {update_active}= updateActive;
const {read_all_active} = readAll

const { read_all } = read_allController
const { update } = updateController

let router = express.Router();


router.get("/me", passport.authenticate("jwt", {session: false}), get_me)
//router.post('/', passport.authenticate("jwt", { session:false }), validator(schemaAuthors), create)
router.put("/me",passport.authenticate("jwt", {session: false}), validator(schemaUpdate), update );
router.get('/:id', passport.authenticate("jwt", { session:false }), read_one)
router.post('/', passport.authenticate("jwt", { session:false }), validator(schemaAuthors), alreadyExists, create)
router.get("/authors_me/me", passport.authenticate("jwt", { session:false }), finds_id, me );
router.put("/authors_me/me", passport.authenticate("jwt", { session:false }),validator(schemaUpdate), finds_id,is_active, update )
router.get('/', read_all )
router.put("/admin/:id",passport.authenticate("jwt", { session:false })  ,update_active)
router.get("/admin/prueba", passport.authenticate("jwt", { session:false }),  read_all_active)

export default router