import { asyncErrorHandler } from "../errors/asyncHandler.error.js";
import { ErrorHandler } from "../errors/errorHandler.error.js";
import { Todo } from "../models/todo.model.js";

export const getAllTodos = asyncErrorHandler(async (req , res , next) => {
    const allTodos = await Todo.find();

    if(allTodos.length < 1) return next(new ErrorHandler("No todos found", 404))

    res.status(200).json({
        success : true,
        message : "All todos retrieved successfully",
        data : allTodos,
        length : allTodos.length
    })
})