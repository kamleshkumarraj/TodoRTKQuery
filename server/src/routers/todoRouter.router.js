import { Router } from "express";
import { createTodo } from "../controllers/createTodo.controller.js";
import { todoCreateValidate, validateHandler } from "../lib/todoValidate.validators.js";
import { getAllTodos } from "../controllers/getAllTodos.controller.js";

export const todoRouter = Router();

todoRouter.route('/create').post(todoCreateValidate() , validateHandler, createTodo)
todoRouter.route('/get-all-todos').get(getAllTodos)