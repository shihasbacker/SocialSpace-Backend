import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "users",
    },
    postId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "posts",
    },
    comment: String,
    likes: [],
  },
  { timestamps: true }
);

const Comment = mongoose.model("comment", commentSchema);

export default Comment;
