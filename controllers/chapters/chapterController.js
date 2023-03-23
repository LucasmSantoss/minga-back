import Chapter from '../../models/Chapter.js';
const router = express.Router();


router.get('/:id', async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.id);
    if (!chapter) {
      return res.status(404).json({ message: 'Capítulo no encontrado' });
    }
    res.json(chapter);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error del servidor' });
  }
  });


module.exports = router;
