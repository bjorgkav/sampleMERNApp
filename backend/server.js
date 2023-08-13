//for environment variables, dotenv sends the values to the process.env object
require("dotenv").config();

const express = require("express");
const mongoose = require('mongoose');
const workoutRoutes = require("./routes/workouts");

//start the express app
const app = express();

//#region middleware (will be run for each and every request. requires the next argument to move to the next function)

app.use(express.json()); //checks if request has data in body, parses it, adds it to the "req" object

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//#endregion

//#region use imported route handlers

app.use("/api/workouts", workoutRoutes); //only uses the routes in workouts.js if client makes request to /api/workouts
                                         //ends up as /api/workouts/<endpoint>

//#endregion

//connect to db

mongoose.connect(process.env.MONGODB_URI) //asynchronous process, then() will wait for connect() to finish
    .then(() => {
        console.log("Connected to MongoDB Atlas database...");

        //start listening for requests only if connection succeeded

        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT} (accessible via http://localhost:${process.env.PORT})...`)
        });
    })
    .catch((error) => {
        console.log(error);
    })