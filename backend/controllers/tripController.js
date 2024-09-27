const TripModel = require("../models/tripModel")
const tripModel = require("../models/tripModel")

// ? Create a TRIP
const createTrip = async (req, res) => {
    const { image, title, about, startDate, endDate, tripPrice, description } = req.body
    try {
        const newTrip = new TripModel({ image, title, about, startDate, endDate, tripPrice, description })
        await newTrip.save()
        res.status(201).json({ success: true, message: "New Trip Added" })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", success: false })

    }
}

// ? Get All Trips
const getAllTrips = async (req, res) => {
    try {
        const allTrips = await TripModel.find({})
        res.status(200).json({ sucess: true, allTrips })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" })

    }


}

// ? GET trip by Id
const getTripById = async (req, res) => {
    try {
        const { id } = req.params
        const singleTrip = await TripModel.findById(id)
        if (!singleTrip) {
            return res.status(500).json({
                message: "Trip Not Found",
                success: false
            })
        }
        res.status(200).json({
            success: true,
            message: "Trip Found",
            singleTrip,
        })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

// ? Delete a TRIP
const deleteTrip = async (req, res) => {
    try {
        const { id } = req.params
        const deleteTrip = await TripModel.findByIdAndDelete(id)
        if (!deleteTrip) {
            return res.status(500).json({ success: false, message: "Error deleting trip" })
        }
        res.status(200).json({ success: true, message: "Trip deleted" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

// ? Update a TRIP
const updateTrip = async (req, res) => {
    try {
        const { id } = req.params
        const { image, title, about, startDate, endDate, tripPrice, description } = req.body
        const singleTrip = await TripModel.findByIdAndUpdate(id, {
            image, title, about, startDate, endDate, tripPrice, description
        });
        if (!singleTrip) {
            return res
                .status(500)
                .json({ success: false, message: "Trip not found" })
        }
        res.status(200).json({
            success: true,
            message: "Trip Updated"
        })
    } catch (error) {
        res.status(500).json({ sucess: false, message: "Internal Server Error" })
    }
}

module.exports = {
    createTrip, getAllTrips, getTripById, deleteTrip, updateTrip
}