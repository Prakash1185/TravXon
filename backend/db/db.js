const mongoose = require("mongoose")

const connectDB = async (URL) => {
    try {
        await mongoose.connect(URL);
        console.log("Database connected successfully !!")
    } catch (error) {
        console.log("Error Connecting Database")
    }
}

module.exports = connectDB