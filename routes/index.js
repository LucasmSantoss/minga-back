import express from 'express'
import userRouter from './users.js'
import mangaRouter from './mangas.js'
import categoryRouter from './category.js'


let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users',userRouter)
router.use('/manga', mangaRouter)
router.use('/categories', categoryRouter)

export default router