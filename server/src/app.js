import express from 'express';
import cors from 'cors'
import { todoRouter } from './routers/todoRouter.router.js';

export const app = express();

app.use(express.json({
    limit : '10kb',
}))

app.use(express.urlencoded({
    extended : true
}))

app.use(cors({
    origin : ['http://localhost:5173'],
    methods : ['GET', 'POST', 'PUT', 'DELETE' , 'PATCH'],
    credentials : true
}))

// Now we define the routes for our api.
app.use('/api/v1/todo' , todoRouter)

app.use((err , req , res , next) => {
    err.message = err.message || "Something went wrong !"
    err.status = err.status || 500

    res.status(err.status).json({
        success : false,
        message : err.message
    })
})