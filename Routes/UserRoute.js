import express from "express";
import {
  deleteUser,
  followUser,
  getAllUsers,
  getUser,
  getUserData,
  unFollowUser,
  updateUser,
} from "../Controllers/UserController.js";
import authMiddleWare from "../MiddleWare/AuthMiddleWare.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", authMiddleWare, updateUser);
router.delete("/:id", authMiddleWare, deleteUser);
router.put("/:id/follow", authMiddleWare, followUser);
router.put("/:id/unfollow", authMiddleWare, unFollowUser);
router.post("/getdata", getUserData);

export default router;
