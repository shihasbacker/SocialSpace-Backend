import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    desc: String,
    likes: [],
    image: String,
  },
  { timestamps: true, }
);

const PostModel = mongoose.model("posts", postSchema);
export default PostModel;