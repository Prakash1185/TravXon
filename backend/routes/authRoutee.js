const router = require("express").Router()
const { register, login } = require("../controllers/AuthController")
const {
    signUpValidation,
} = require("../validation/authValidation");

router.route("/register").post(signUpValidation, register)
router.route('/login').post(login)

module.exports = router