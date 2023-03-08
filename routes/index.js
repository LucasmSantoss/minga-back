import express from 'express'
import userRouter from './users.js'
<<<<<<< HEAD
import chapterRouter from './chapters.js'
=======
import mangaRouter from './manga.js'

>>>>>>> 16af7bec82eb3886acc840edda4740b61f64d2c6

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

<<<<<<< HEAD
router.use('/users', userRouter)
router.use('/chapters', chapterRouter)
=======
router.use('/users',userRouter)
router.use('/manga', mangaRouter)
>>>>>>> 16af7bec82eb3886acc840edda4740b61f64d2c6

export default router