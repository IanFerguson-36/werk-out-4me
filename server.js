const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3044;

const app = express();

app.use(logger("dev"));

app.use(require("./routes"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
 useNewUrlParser: true,
       useUnifiedTopology: true,
       useCreateIndex: true,
       useFindAndModify: false
});
