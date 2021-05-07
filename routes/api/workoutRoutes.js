const router = require("express").Router();
const Workout = require("../../models/exercisesmodel");

router.post("/", (req, res) => {
  Workout.create({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.put("/:id", (req, res) => {
  console.log(req.params.id);
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then((data) => {
      console.log("This works if ther's something after this sentence", data);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .then((data) => {
      console.log("total duration time", data);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
