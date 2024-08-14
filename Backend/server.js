import express from 'express';
import cors from 'cors';
import {connectDB} from './Config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoutes.js';
import dotenv from 'dotenv';

//app config

const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//DB connection
connectDB();

//api endpoints 
app .use("/api/food", foodRouter)
app.use("/image",express.static("uploads"))
app.use("/api/user" , userRouter)



app.get("/", (req, res) => {
    res.send("API Working")
  });

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))

//mongodb+srv://kunal2507jha:Kunal@cluster0.lxde1ob.mongodb.net/?