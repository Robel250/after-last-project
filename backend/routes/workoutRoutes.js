import express from "express";
import { Workout } from "../Models/workoutModel.js";

import authenticate from "../middleware/authenticate.js";

const router = express.Router();

router.post("/", authenticate, async (req, res) => {
    try {
        const { excersize, load,  reps } = req.body;
        console.log("user",req.userId)
        if (!excersize || !load|| !reps) {
            return res.status(400).send({
                message: "Please send all required fields: Excersize, Load,Reps",
            });
        }

       
        const newWorkout = {
            excersize,
            load,
            reps,
           
            userId: req.userId, 
        };

        console.log(newWorkout)
        const workout = await Workout.create(newWorkout);
        return res.status(201).send(workout);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


router.get("/", authenticate, async (req, res) => {
    try {
        const workouts = await Workout.find({ userId: req.userId }); // Filter by userId
        return res.status(200).json({
            count:workouts.length,
            data:workouts,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


router.delete("/:id", authenticate, async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Workout.findOneAndDelete({ _id: id, userId: req.userId }); 
        if (!result) {
            return res.status(404).send({ message: "Workout not found or unauthorized" });
        }

        res.status(200).send({ message: "Workout successfully deleted" });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});



export default router;
