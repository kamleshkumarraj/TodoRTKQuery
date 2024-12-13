import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected successfully on port : ${connect.connection.port} and host : ${connect.connection.host}`)
    } catch (error) {
        console.log("Database connection failed due to this error : ", error)
    } 
}