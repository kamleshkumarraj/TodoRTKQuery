export class ErrorHandler extends Error{
    constructor(message , status){
        super(message , status);
        this.error = error
        this.status = status

        Error.captureStackTrace(this , this.constructor)
    }
}