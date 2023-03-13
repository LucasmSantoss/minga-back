import Manga from "../../models/Manga.js";

const getController = {
    read: async (req, res) => {

        let order = { title: 1}
        if(req.query.order == 1 || req.query.order == -1){
            order.title = req.query.order
        }

        let pagination = { page: 1, limit: 6 }
        if(req.query.page){
            pagination.page = Number(req.query.page)
        }

        let skip = pagination.page > 1 ? (pagination.page - 1) * pagination.limit: 0

        let query = {}
        if(req.query.title){
            query.title = new RegExp(req.query.title.trim(), "i")
            skip = 0
        }
        if(req.query.categories){
            query.category_id = req.query.categories.split(",")
        }

        let mangas = await Manga.find(query)
        .select("title category_id cover_photo _id")
        .sort(order)
        .skip(skip)
        .limit( pagination.limit > 0 ? pagination.limit: 0)
        .populate("category_id", "name -_id")

        return res
        .status(200)
        .json({
            success: true,
            message: "aca estan todos los capitulos",
            mangas
        })

    }
}

export default getController