import User from "../models/User.js"
import {StatusCodes} from "http-status-codes"

const register = async (req, res) => {
      const users = await User.create(req.body)
      res.status(StatusCodes.OK).json({users})
}
const login = async (req, res) => {
    res.send("login user")
}
const updateUser = async (req, res) => {
    res.send("updateUser user")
}

export {register, login , updateUser}
