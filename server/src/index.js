import dotenv from 'dotenv';
dotenv.config({
    path : 'src/.env'
})
import {app} from './app.js'
import { connectDB } from './db/dbConnect.js';

app.get('/' , (req  ,res) => {
    res.status(200).json({
        success : true,
        message : "Welcome to the Todo API",
        data : "Hello , World!"
    })
})

connectDB()
.then(() => {
    app.listen(process.env.PORT , () => {
        console.log(`Server running on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("Server can't be started because the database connection failed due to this error: ",err)
})

