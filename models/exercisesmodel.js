const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {},
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter an exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter an exercise name",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Enter an exercise duration",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("workout", workoutschema);

module.exports = Workout;
