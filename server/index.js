const express = require("express");
const cors = require("cors");
const path = require('path');
const mongoose = require("mongoose");
const authRoutes = require("./routes/Routes");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 4000;

//mongoString from .env file
require('dotenv').config(); // Load environment variables from .env file

const mongoURI = process.env.MONGODB_STRING || 'localhost:27017/fotoflask';

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started Successfully." + PORT);
  }
});
 
app.use(cors({ origin: "http://localhost:3010", credentials: true }));

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

module.exports = mongoose;

app.use(cookieParser());

app.use(express.json());
app.use("/", authRoutes);
