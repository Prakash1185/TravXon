const mongoose = require("mongoose")

const tripSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true

    },
    startDate: {
        type: Date,
        required: true,
        default:Date.now

    },
    endDate: {
        type: Date,
        required: true,
        default:Date.now

    },
    tripPrice: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }


})

const TripModel = new mongoose.model("Trip", tripSchema)
module.exports = TripModel