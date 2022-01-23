import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import Cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(Cors());
app.use("/new",userRoutes)
app.get('/',(req,res)=>{
    res.send("Hello india")
})

app.post('/',(req,res)=>{
    res.send(req.body)
})

const PORT = process.env.PORT || 5000
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));