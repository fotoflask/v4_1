const { register, login } = require("../controllers/Controllers");
const { checkUser } = require("../middlewares/Middleware");

const router = require("express").Router();

router.post("/", checkUser); 
router.post("/register", register);
router.post("/login", login);

module.exports = router;