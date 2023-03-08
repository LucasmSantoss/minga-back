import Chapter from "../../models/Chapter.js";

async function nextOrder(req, res, next){
    if (!req.body.order) {
        const chapter = await Chapter.findOne({ manga_id: req.body.manga_id }).sort("-order")
        if (chapter.length === 0){
            req.body.order = 1
            next()
        } else {
            req.body.order = chapter[0].order + 1
            next()
        }
    } else {
        next()
    }
}

export default nextOrder