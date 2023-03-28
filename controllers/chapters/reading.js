import Chapter from "../../models/Chapter.js";
import User from "../../models/User.js";

const chapterController = {
  get_chapter: async (req, res) => {
    try {
      const chapter = await Chapter.findOne({ _id: req.params.id });
      if (!chapter) {
        return res.status(400).json({
          success: false,
          message: "Chapter not found",
        });
      }

      const user = await User.findOne({ _id: req.user.id });

      // update user's last read chapter
      user.last_read_chapter = chapter._id;
      await user.save();

      return res.status(200).json({ success: true, chapter });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },
};

const userController = {
  get_last_read_chapter: async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.user.id });

      if (!user.last_read_chapter) {
        return res.status(400).json({
          success: false,
          message: "No last read chapter found for this user",
        });
      }

      const chapter = await Chapter.findOne({ _id: user.last_read_chapter });
      if (!chapter) {
        return res.status(400).json({
          success: false,
          message: "Last read chapter not found",
        });
      }

      return res.status(200).json({ success: true, chapter });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },
};

export { chapterController, userController };