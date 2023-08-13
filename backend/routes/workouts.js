//access app using the express router
const express = require('express');

const router = express.Router();

//#region routes

//GET all workouts
router.get("/", (req, res) => {
    res.json({mssg:"GET all workouts"});
});

//GET a single workout
router.get("/:id", (req,res)=>{
    res.json({mssg:`GET single workout. ID is: ${req.params.id}`})
})


router.get("/hello", (req,res)=>{
    res.json({mssg:"Hello World!"});
})

//POST a new workout
router.post("/", (req,res)=>{
    res.json({mssg:"POST a new workout"});
})

//DELETE a workout
router.delete("/:id", (req,res)=>{
    res.json({mssg:`DELETE a new workout. ID: ${req.params.id}`});
})

//UPDATE a workout
router.patch("/", (req,res)=>{
    res.json({mssg:"UPDATE/PATCH a new workout"});
})
//#endregion

//export the router for use in server.js
module.exports = router;
