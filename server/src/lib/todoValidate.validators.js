import {body , validationResult} from 'express-validator'
import { asyncErrorHandler } from '../errors/asyncHandler.error.js'
import { ErrorHandler } from '../errors/errorHandler.error.js';
import { console } from 'inspector';

export const todoCreateValidate = () => [
    body('content').notEmpty().withMessage("Content is required for Todo !").isLength({min : 2 , max : 100}).withMessage("Content should be between 2 and 100 characters !"),
]

export const validateHandler = asyncErrorHandler(async (req , res , next) => {
    const error = validationResult(req);
    if(error.isEmpty()) return next();

    const errors = error.array().map((err) => err.msg).concat(" ")

    return next(new ErrorHandler(errors , 400))
})

