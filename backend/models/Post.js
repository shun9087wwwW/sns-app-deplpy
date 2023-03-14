const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    // つぶやき
    desc: {
      type: String,
      max: 200,
    },
    img: {
      type: String,
    },
    likes: {
      // 誰がいいねしたかを格納するために配列型
      type: Array,
      default: [],
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
