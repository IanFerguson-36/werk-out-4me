const router = require("express").Router();
const Workout = require("../models/exercisesmodel.js");

router.post("api/workouts", (req, res) => {
  Workout.create({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});