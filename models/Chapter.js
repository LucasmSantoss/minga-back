import mongoose, {Schema} from "mongoose";

const schemaChapter = new mongoose.Schema({
    manga_id: {type: mongoose.Types.ObjectId,ref: "manga", required: true },
    cover_photo: {type: String, required: true},
    title: {type: String, required: true},
    order: {type: Number},
    pages: {type: Array, required: true},
}, {
    time_stamps: { type: Date, default: Date.now, required: true}
 }
)

let Chapter = mongoose.model("chapters", schemaChapter)

export default Chapter