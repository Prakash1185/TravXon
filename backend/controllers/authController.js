const UserModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

// ? REGISTER 
const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        //? check is user already exists or not
        let user = await UserModel.findOne({ email })
        if (user) {
            return res.status(400).json({ success: false, message: "User already exists , please login" })
        }

        // ? Hashing the password
        const hashedPassword = await bcrypt.hash(password, 10)

        // ? create a new user
        const newUser = new UserModel({ name, email, password: hashedPassword })

        await newUser.save()

        return res
            .status(201)
            .json({ success: true, message: "Signup successfully" })
    } catch (error) {
        return res
            .status({ success: false, message: "Internal server error" })

    }
}

// ? LOGIN
const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email })
        const ErrorMsg = "Invalid Credentials"
        // ? check if user registered or not 
        if (!user) {
            return res
                .status(403)
                .json({
                    message: ErrorMsg,
                    success: false
                })
        }

        const isPasswordEqual = await bcrypt.compare(password, user.password)
        if (!isPasswordEqual) {
            return res.status(403).json({ message: ErrorMsg, success: false })
        }

        const jwtToken = jwt.sign(
            {
                email: user.email,
                id: user._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }

        );

        res.status(200).json({
            message: "Login success",
            success: true,
            jwtToken,
            id: user._id
        })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", success: false })
    }
}

module.exports = { register  , login}