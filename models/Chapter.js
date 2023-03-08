import mongoose, {Schema} from "mongoose";

const schemaChapter = new mongoose.Schema({
    manga_id: {type: mongoose.Types.ObjectId,ref: "mangas", required: true },
    cover_photo: {type: String, required: true},
    title: {type: String, required: true},
    order: {type: Number, required: false},
    pages: [{type: String, required: true}]
},
   { timestamps: true
   
})

let Chapter = mongoose.model("chapters", schemaChapter)

export default Chapter