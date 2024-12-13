import { asyncErrorHandler } from "../errors/asyncHandler.error.js";
import { ErrorHandler } from "../errors/errorHandler.error.js";
import { Todo } from "../models/todo.model.js";

export const createTodo = asyncErrorHandler(async (req , res , next) => {
    const {content , status} = req.body
    await Todo.create({content , status})
    res.status(201).json(({
        success : true,
        message : "Todo created successfully",
    }))
})