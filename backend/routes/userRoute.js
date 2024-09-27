const router = require("express").Router()
const { getAllUsers, getSingleUser } = require("../controllers/userController")
const { checkAuthenticated } = require("../middlewares/authMiddleware");

router.route('/getAllUsers').get(checkAuthenticated, getAllUsers)
router.route('/getUserById').get(checkAuthenticated,getSingleUser)

module.exports = router
