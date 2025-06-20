import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName : "mern_full_auth",
    })
    .then(() => {
      console.log(`Connected to database.\n\n  host: ${mongoose.connection.host}\n  Name: ${mongoose.connection.name}\n`);
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database: ${err}`);
    });
    
}

export default connectDB;