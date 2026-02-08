import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


const DBConnection=async ()=>{
    try {
      await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database',error.message);
    }
}

export default DBConnection;