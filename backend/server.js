require('dotenv').config()
const express = require("express")
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require("./db/db")
const AuthRoute = require('./routes/authRoutee')
const TripRoute = require('./routes/tripRoute.js')
const UserRoute = require('./routes/userRoute.js')



// ? SETTING UP CORS
const corsOptions = {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    optionsSuccessStatus: 200
}

// ? USING THE MIDDLEWARES
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use('/api/auth',AuthRoute)
app.use('/api/action',TripRoute)
app.use('/api/user',UserRoute)


// ? DEFINING ROUTES
app.get('/ping', (req, res) => {
    res.send("PONG")
})

// ?  MAKING SERVER UP ON THE PORT AND CONNECTING DATABASE
const PORT = process.env.PORT || 5000
const MONGO_URL = process.env.MONGO_URL
connectDB(MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`)
        })
        .on("error",(err)=>{
            console.error("Failed to start server",err)
        })
    })
    .catch((err)=>{
        console.log("Error from server",err)
    })