const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");
const multer = require('multer');
const Datemod = require("../model/Date");
const path = require('path');


module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(
      token,
      "Fotoflask Secret Key",
      async (err, decodedToken) => {
        if (err) {
          res.json({ status: false });
          next();
        } else {
          const user = await User.findById(decodedToken.id);
          if (user) res.json({ status: true, user: user.email });
          else res.json({ status: false });
          next();
        }
      }
    );
  } else {
    res.json({ status: false });
    next();
  }
};

const directory_postPhotos = '../public/public/PostImages';

let storage_postphotos = multer.diskStorage({
  destination: directory_postPhotos,
  filename: (req, file, cb) => {
      const fileName = new Date().toISOString().replace(/[\s:-]+/g, '_') + file.originalname;
      // const filePath = path.join(__dirname, directory_postPhotos, fileName);
      req.fileName = fileName;
      console.log(req.fileName,'filename');
      cb(null, fileName);
      // console.log('File stored at:', filePath);
  }
});

let storage_profilepics = multer.diskStorage({
  destination:'./private/images/ProfilePhotos',
   filename:(req,file,cb)=>{
    const fileName = new Date().toISOString().replace(/[\s:-]+/g, '_') + file.originalname;
    // const filePath = path.join(__dirname, directory_postPhotos, fileName);
    req.filename = fileName;
    cb(null, fileName);
   }
})

let storage_coverphotos = multer.diskStorage({
  destination:'./private/images/CoverPhotos',
   filename:(req,file,cb)=>{
    const fileName = new Date().toISOString().replace(/[\s:-]+/g, '_') + file.originalname;
    // const filePath = path.join(__dirname, directory_postPhotos, fileName);
    req.postImage.fileName = fileName;
    cb(null, fileName);
   }
})

module.exports.uploadprofilepic =multer({
  storage:storage_profilepics,
  fileFilter:(req,file,cb)=>{
      if(
          file.mimetype == 'image/jpeg' ||
          file.mimetype == 'image/jpg' ||
          file.mimetype == 'image/png' ||
          file.mimetype == 'image/gif'
      ){
             cb(null,true);
      }else{
          cb(null,false);
          cb(new Error('ONLY IMAGES ARE ALLOWED TO BE UPLOADED'));
      }

  }
})

module.exports.uploadcoverphoto =multer({
  storage:storage_coverphotos,
  fileFilter:(req,file,cb)=>{
      if(
          file.mimetype == 'image/jpeg' ||
          file.mimetype == 'image/jpg' ||
          file.mimetype == 'image/png' ||
          file.mimetype == 'image/gif'
      ){
             cb(null,true);
      }else{
          cb(null,false);
          cb(new Error('ONLY IMAGES ARE ALLOWED TO BE UPLOADED'));
      }

  }
})

module.exports.upload =multer({
  storage:storage_postphotos,
  fileFilter:(req,file,cb)=>{
      if(
          file.mimetype == 'image/jpeg' ||
          file.mimetype == 'image/jpg' ||
          file.mimetype == 'image/png' ||
          file.mimetype == 'image/gif'
      ){
             cb(null,true);
      }else{
          cb(null,false);
          cb(new Error('ONLY IMAGES ARE ALLOWED TO BE UPLOADED'));
      }

  }
})
