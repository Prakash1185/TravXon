const router = require("express").Router()
const { createTrip, getAllTrips, getTripById, deleteTrip, updateTrip } = require("../controllers/tripController")
const { checkAuthenticated } = require("../middlewares/authMiddleware");


router.route('/addTrip').post(checkAuthenticated, createTrip)
router.route('/getAllTrips').get(checkAuthenticated, getAllTrips)
router.route('/getTripById/:id').get(checkAuthenticated, getTripById)
router.route('/deleteTrip/:id').delete(checkAuthenticated, deleteTrip)
router.route("/updateTrip/:id").put(checkAuthenticated, updateTrip)

module.exports = router
