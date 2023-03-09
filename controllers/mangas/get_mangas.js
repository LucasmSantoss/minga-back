import Manga from "../../models/Manga.js";

const controller = {
    read: async (req, res) => {

        let query = {}
        if(req.query.title){
            query.title = new RegExp(req.query.title.trim(), "i")
            skip = 0
        }
        if(req.query.categories){
            query.category_id = req.query.categories.split(",")
        }

    }
}