const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  exerciseLift: [
    {
      type: String,
      name: "Bicep Curl",
      duration: 20,
      weight: 100,
      reps: 10,
      sets: 4,
    },
  ],
  exerciseCardio: [
    {
      type: "resistance",
      name: "Lateral Pull",
      duration: 20,
      weight: 300,
      reps: 10,
      sets: 4,
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
