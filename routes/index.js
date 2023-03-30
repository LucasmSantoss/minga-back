import express from 'express'
import userRouter from './users.js'
import chapterRouter from './chapters.js'
import mangaRouter from './manga.js'
import categoryRouter from "./category.js"
import authorRouter from "./authors.js"
import donationsRouter from "./donations.js"
import reactionsRouter from './reactions.js'
import commentsRouter from './comments.js'


let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/',userRouter)
router.use('/users', userRouter)
router.use('/chapters', chapterRouter)
router.use('/authors', authorRouter)
router.use('/manga', mangaRouter)
router.use("/category", categoryRouter)
router.use("/authors", authorRouter)
router.use("/donate", donationsRouter)
router.use("/category", categoryRouter)
router.use('/comments',commentsRouter)
router.use('/reactions', reactionsRouter)
router.use('/manga', mangaRouter)
router.use("/category", categoryRouter)


export default router