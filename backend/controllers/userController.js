const UserModel = require("../models/userModel")

const getSingleUser = async (req, res) => {
    try {
        const id = req.headers['user-id']; // Get user ID from headers
        const singleUser = await UserModel.findById(id, {
            password: 0,
            isAdmin: 0,
        });

        if (!singleUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User found",
            singleUser
        });
    } catch (error) {
        console.error("Error fetching user:", error); // Log the error for debugging
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}


const getAllUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.find({}, {
            password: 0,

        })
        res.status(200).json({ sucess: true, allUsers })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" })

    }
}

module.exports = { getSingleUser, getAllUsers }