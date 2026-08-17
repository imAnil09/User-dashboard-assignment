const errorHandler = (err, req, res, next) => {
    console.error(err);

    if (err.code === 11000 || err.cause?.code === 11000) {
        return res.status(409).json({
            message: "Email already exists",
        });
    }

    if (err.name === "ValidationError") {
        return res.status(400).json({
            message: Object.values(err.errors)
                .map((error) => error.message)
                .join(", "),
        });
    }

    if (err.name === "CastError") {
        return res.status(400).json({
            message: "Invalid user ID",
        });
    }

    return res.status(500).json({
        message: "Internal server error",
    });
};

export default errorHandler;