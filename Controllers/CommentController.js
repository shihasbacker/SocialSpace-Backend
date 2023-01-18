import Comment from "../Models/CommentModel.js";

export const createComment = async (req, res) => {
  console.log("hhhhhh");
  const postId = req.params.id;
  const userId = req.body._id;

  console.log(postId,req.body,'aaa');
  try {
    const comment = new Comment({
      userId: userId,
      postId: postId,
      comment: req.body.comment,
    });

    await comment.save();
    console.log(comment,'nirmal saji ');
    res.status(200).json(comment);
  } catch (error) {
    console.log(error,'error');
    
    res.status(500).json(error);
  }
};

export const getComments = async (req, res) => {
  const postId = req.params.id;
 console.log(postId,'shihas mandan');
  try {
    const response = await Comment.find({ postId: postId }).populate({
      path: "userId",
      select: { firstname: 1, lastname: 1 },
    });
    console.log(response,'shibily muhammed');

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
