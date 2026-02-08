import express from "express";
import router from "./routes/routes.js";
import cors from 'cors';
import dotenv from 'dotenv';
import DBConnection from "./database/db.js";

dotenv.config();

const app=express();
app.use(cors());
app.use("/",router);

const PORT=process.env.PORT || 8000;

DBConnection();
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
