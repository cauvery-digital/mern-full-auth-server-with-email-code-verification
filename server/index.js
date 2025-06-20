import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import {errorMiddleware} from "./middlewares/error.js";
import userRouter from "./routes/userRouter.js";
import {removeUnverifiedAccounts} from "./automation/removeUnverifiedAccounts.js";


const app = express();
dotenv.config();
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);

removeUnverifiedAccounts();
connectDB();

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on http://localhost:${process.env.PORT}`);
}
)
app.get('/',(req,res)=>{
  res.send({
    activeStatus:true,
    error:false,
  })
})