import Chapter from "../../models/Chapter.js"

const createChapter = {
    create: async (req, res, next) => {
        try {
            const chapter = await Chapter.create(req.body)
            res.status(201).json({
                success: true,
                response: chapter,
                id: chapter._id
            })
         }
        catch(error) {
            console.log(error)
            return res.status(400).json({
                success: false,
                message: 'fail to create',
                body: req.body
            
            })
    }
}}

export default createChapter