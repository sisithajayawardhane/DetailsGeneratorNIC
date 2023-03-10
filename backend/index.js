const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('strictQuery', false);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Connection Success!");
});

const userRouter = require("./Authentication.js"); 
app.use("/user", userRouter);


app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
});





