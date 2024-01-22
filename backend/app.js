import express from "express";
import router from "./routes/index.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/", router);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

export default app;