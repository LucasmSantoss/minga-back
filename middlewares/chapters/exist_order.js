import Chapter from "../../models/Chapter.js";

async function orderExist (req, res, next){
    const chapter = await Chapter.findOne({manga_id: req.body.manga_id, order: req.body.order})
 if (chapter){
    return res.status(400).json({message:"The chapter you're trying to create already exists"})
 } return next ()
}
export default orderExist