import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kunal2507jha:Kunal@cluster0.lxde1ob.mongodb.net/Food').then(()=>console.log("Connected to DB"));
}
