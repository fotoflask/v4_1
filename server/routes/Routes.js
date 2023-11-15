const { register, login, getPost, getPosts } = require("../controllers/Controllers");
const { checkUser,upload } = require("../middlewares/Middleware");
const Datemod = require("../model/Date");
const postmodel = require("../model/PostModel");

const router = require("express").Router();

router.post("/", checkUser); 
router.post("/register", register);
router.post("/login", login);
// router.post("/createpost", singlepost);

router.post('/createpost',upload.single('single_input'),(req,res)=>{
    console.log(req.body);
    if(!req.file)res.status(404).send("/createpost");
    else{
    {
            {                
                postmodel.create({
                    duserId : req.body.duserId,
                    dusername : req.body.dusername,
                    Date : new Date(),
                    Picture  :  req.fileName,
                    Description_of_post  : req.body.description,
                    Tag : req.body.tag.split(" "),
                    likes_number : 0,
                    comments_number : 0,
                    Shares : 0,                
                   })
                }
        }
    }
})

router.get("/getposts", getPosts);
router.get("/post:postid", getPost);

module.exports = router; 