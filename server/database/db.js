import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// dotenv.config

async function DBConnection() {

    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;