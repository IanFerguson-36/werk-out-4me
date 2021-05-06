const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  dayOne: [
    {
      type: "resistance",
      name: "Bicep Curl",
      duration: 20,
      weight: 100,
      reps: 10,
      sets: 4,
    },
  ],
  dayTwo: [
    {
      type: "resistance",
      name: "Lateral Pull",
      duration: 20,
      weight: 300,
      reps: 10,
      sets: 4,
    },
  ],
  dayThree: [
    {
      type: "cardio",
      name: "Running",
      duration: 25,
      distance: 4,
    },
  ],
  dayFour: [
    {
      type: "resistance",
      name: "Bench Press",
      duration: 20,
      weight: 285,
      reps: 10,
      sets: 4,
    },
  ],
  dayFive: [
    {
      type: "resistance",
      name: "Bench Press",
      duration: 20,
      weight: 300,
      reps: 10,
      sets: 4,
    },
  ],
  daySix: [
    {
      type: "resistance",
      name: "Quad Press",
      duration: 30,
      weight: 300,
      reps: 10,
      sets: 4,
    },
  ],
  daySeven: [
    {
      type: "resistance",
      name: "Bench Press",
      duration: 20,
      weight: 300,
      reps: 10,
      sets: 4,
    },
  ],
  dayEight: [
    {
      type: "resistance",
      name: "Military Press",
      duration: 20,
      weight: 300,
      reps: 10,
      sets: 4,
    },
  ],
});
