import {StatusCodes} from "http-status-codes"

const errorHandlerMiddleWare = (err, req, res, next) => {
    console.log(err)
    const defaultError = {
        statusCode:StatusCodes.INTERNAL_SERVER_ERROR,
        msg:"something went wrong please try again"
    }
    if(err.name === "ValidatorError"){
        defaultError.statusCode=StatusCodes.BAD_REQUEST,
        defaultError.msg = err.message
    }
    res.status(defaultError.statusCode).json({msg: defaultError.msg })
}

export default errorHandlerMiddleWare