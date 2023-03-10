// import Chapter from "../../models/Chapter.js"

// const getOneChapter = (req, res, next) => {
//   const chapterId = req.params.id;
//   Chapter.findById(chapterId)
//     .select('pages.number pages.imageUrl')
//     .then(chapter => {
//       if (!chapter) {
//         const error = new Error('Chapter not found');
//         error.statusCode = 404;
//         throw error;
//       }
//       res.status(200).json({ message: 'Chapter fetched successfully', pages: chapter.pages });
//     })
//     .catch(err => {
//       if (!err.statusCode) {
//         err.statusCode = 500;
//       }
//       next(err);
//     });
// };

// export default getOneChapter;


import Chapter from '../../models/Chapter.js'

const controller = {
    get_one: async (req, res) => {
        try {
            const one = await Chapter.findOne({_id:req.params.id}).select("pages _id").sort({pageNumber: 1});
            if(one) {
                return res.status(200).json({Chapter: one})
            } else {
                return res.status(400).json({
                    success: false,
                    message: 'This chapter does not exist'
                });
            }
        } catch(err) {
            console.error(err);
            return res.status(500).json({
                success: false,
                message: 'Internal server error'
            });
        }
    }
}
export default controller;