import express from 'express'
import userRouter from './users.js'
import mangaRouter from './manga.js'


let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users',userRouter)
router.use('/manga', mangaRouter)

export default router