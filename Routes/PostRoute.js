import express from "express";
import {
  createPost,
  deletePosts,
  getPost,
  getTimelinePosts,
  likePost,
  updatePost,
} from "../Controllers/PostController.js";
const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.post("/deletePost/:id", deletePosts);
router.put("/:id/like", likePost);
router.get("/:id/timeline", getTimelinePosts);

export default router;
