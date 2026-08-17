import HTTP_STATUS from '../constants/httpStatus.js';

const errorHandler = (err, req, res, next) => {
    console.error(err);

    if (err.code === 11000 || err.cause?.code === 11000) {
        return res.status(HTTP_STATUS.CONFLICT).json({
            message: "Email already exists",
        });
    }

    if (err.name === "ValidationError") {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: Object.values(err.errors)
                .map((error) => error.message)
                .join(", "),
        });
    }

    if (err.name === "CastError") {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: "Invalid user ID",
        });
    }

    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        message: "Internal server error",
    });
};

export default errorHandler;