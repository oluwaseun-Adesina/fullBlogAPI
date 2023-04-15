const globalErrorHandler = (err, req, res, next) => {
    // status
    // message
    // stack
    const stack = err.stack;
    const message = err.message;
    const status = err.status ? err.status : "failed";
    const statusCode = err.statusCode ? err.statusCode : 500;

    // send the resposn to the user
    res.status(statusCode).json({
        message,
        stack,
        status
        
    })
}

module.exports = globalErrorHandler