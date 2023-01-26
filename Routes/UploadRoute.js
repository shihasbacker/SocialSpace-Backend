import express from "express";
const router = express.Router();
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Public/Images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
      return callback("Only images are allowed");
    }
    callback(null, true);
  },
});

// var upload = multer({ //multer settings
//   storage: storage,
//   fileFilter: function (req, file, callback) {
//       var ext = path.extname(file.originalname);
//       if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
//           return callback(new Error('Only images are allowed'))
//       }
//       callback(null, true)
//   },
//   limits:{
//       fileSize: 1024 * 1024
//   }
// }).single('profilepic');

router.post(
  "/",
  upload.single("file", (req, res) => {
    try {
      return res.status(200).json("File Uploaded Successfully");
    } catch (error) {
      console.log(error);
    }
  })
);

export default router;
