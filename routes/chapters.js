import express from "express";
let router = express.Router()
import createChapter from "../controllers/chapters/create.js"

const { create } = createChapter
router.get("/", function (req, res, next) {
    res.send("chapters here")
})

router.post("/", create)

export default router