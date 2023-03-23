const express = require("express");
const mongoose = require("mongoose");
const connectToDB = require('./db/conn');
const app = express();

const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;
const userRouter = require('./routes/User');

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
});

connectToDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

