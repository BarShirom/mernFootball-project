import express, { Request, Response } from "express"
import dotenv from "dotenv";
import connectDB from "./config/db";
import cors from 'cors';
import gameRoute from './routes/gameRoute';
import authRoute from './routes/authRoutes';

const app = express()
app.use(express.json());
app.use(cors())

connectDB()

dotenv.config();
const PORT = process.env.PORT

app.use("/api/games", gameRoute);
app.use("/api/auth", authRoute);

app.get("/", (req: Request, res: Response) => {
    res.send("API IS RUNNING...");
  });

  app.listen(PORT, () => {
    console.log(`server is active on port : ${PORT}`);
  });

