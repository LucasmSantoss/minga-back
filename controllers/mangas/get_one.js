import Manga from '../../models/Manga.js'

    const get_one = async (req, res) => {
        let one = await Manga.findOne({_id:req.params.id}).select("title description -_id")
        if(one){
            return res
            .status(200)
            .json({ manga: one })
        }else{
            return res.status(400).json({
                success: false,
                message: "This manga dont exist already!",
        });
        }
    }

export default get_one