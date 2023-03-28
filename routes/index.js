import express from 'express'
import userRouter from './users.js'
import chapterRouter from './chapters.js'
import mangaRouter from './manga.js'
import categoryRouter from "./category.js"
import authorRouter from "./authors.js"
import companyRouter from './companies.js'

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/',userRouter)
router.use('/users', userRouter)
router.use('/chapters', chapterRouter)
router.use('/',userRouter)
router.use('/authors', authorRouter)
router.use('/manga', mangaRouter)
router.use("/category", categoryRouter)
router.use("/companies", companyRouter)

export default router