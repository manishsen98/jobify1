import mongoose from "mongoose";
import validator from "validator";

const UserSchema = mongoose.Schema({
    name:{
    type:String,
    required: [true, "please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true
 },
 email :{
    type:String,
    required: [true, "please provide email"],
    validate : {
        validator: validator.isEmail,
        message: "please provide valid email"
    },
    unique: true
 },
 password: {
    type:String,
    required: [true, "please provide password"]
 },
 lastName: {
    type:String,
    maxlength: 20,
    trim: true,
    default:"lastName"
 },
 location: {
    type:String,
    maxlength: 20,
    trim: true,
    default:"My City"
 },

})
export default mongoose.model("user", UserSchema)



