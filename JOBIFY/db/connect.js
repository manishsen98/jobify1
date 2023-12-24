import mongoose from "mongoose"

const connectDB = (url) => {
    try {
        return mongoose.connect(url).then(()=>console.log("DB Connected"))
    } catch (error) {
        console.log(error)
    }
}

export default connectDB