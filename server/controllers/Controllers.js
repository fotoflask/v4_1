const User = require("../model/UserModel");
const UserDetail = require("../model/UserDetailModel");
const jwt = require("jsonwebtoken");
const multer = require('multer');
const postmodel = require("../model/PostModel");
const mongoose = require("../index");
const Datemod = require("../model/Date");


const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "Fotoflask Secret Key", {
    expiresIn: maxAge,
  });
};

const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  console.log(err);
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  if (err.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

module.exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    await UserDetail.create({ email, name: "a", phone: "b", address: "c"});
    const token = createToken(user._id);

    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: maxAge * 1000,
    });

    res.status(201).json({ user: user._id, created: true });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id, status: true });
  } catch (err) {
    const errors = handleErrors(err);
    res.json({ errors, status: false });
  }
};

module.exports.homepageposts = async (req, res) => {
  try {
    const posts = await postmodel.aggregate([
        {
            $lookup: {
                from: 'UserDetails',
                localField: 'duserId',
                foreignField: 'duserId',
                as: 'userdetails'
            }
        },
        {
            $match: {
                $or: [
                    {dusername: {$in: homepage_following}},
                    {duserId: req.session.userId}
                ]
            }
        },
        {
            $project: {
                _id: 1,
                postid: 1,
                Date: 1,
                Picture: 1,
                Description_of_post: 1,
                Tag: 1,
                likes_number: 1,
                likes: 1,
                comments: 1,
                comments_number: 1,
                Shares: 1,
                'userdetails.dusername': 1,
                'userdetails.dprofilename': 1,
                'userdetails.dprofilepic': 1
            }
        },
        {
            $sort: { Date: -1 }
        },
        {
            $limit: 50
        }
    ]);
    } catch (err) {
        console.log(err);
    }
}

module.exports.getPosts = async (req, res) => {
  console.log("getPosts" );
  try{
    const posts =  await postmodel.find({}).sort({Date:-1}).limit(50);
    res.json(posts);
  }
  catch(err){
    console.log(err);
  }
}

module.exports.getPost = async (req, res) => {
  const postid = req.params.postid;

  try {
    const post = await postmodel.findOne({ postid });
    
  } catch (err) {
    console.log(err);
  }
};