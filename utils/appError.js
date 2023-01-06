/**
 * @swagger 
 * tags:
 * name: AppError
 * description: AppError is used to create the error object and pass it to the next function
 *             Importent: it will convert OperationalError to true and pass it to the next function
 **/


class AppError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('1') ? 'fail' : 'error';
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}


module.exports = AppError;