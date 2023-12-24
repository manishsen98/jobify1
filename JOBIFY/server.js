import express from "express"
const app = express()
import dotenv from "dotenv"
import "express-async-errors"
dotenv.config()

// db and authenticateUser
import connectDB from "./db/connect.js"

// routers
import authRouter from "./routes/authRoutes.js"
import jobsRouter from "./routes/jobsRoutes.js"

//notFoundMiddleWare
import notFoundMiddleWare from "./middleware/not-found.js"
import errorHandlerMiddleWare from "./middleware/error-handler.js"
app.use(express.json())



app.use("/api/v1/auth", authRouter)
app.use("/api/v1/jobs", jobsRouter)

app.use(notFoundMiddleWare)
app.use(errorHandlerMiddleWare)

const port = process.env.PORT || 5000



const start = async () => {
    try{
       await connectDB(process.env.MONGO_URL)
       app.listen(port, () => {
        console.log(`server is listening ${port}...`)
    })
    } catch (error) {
     console.log(error)
    }
}
start()