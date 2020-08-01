const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  exercise: {
    type: String,
    trim: true,
    required: "Enter the name of your exercise."
  },
  weight: {
    type: Number,
    required: "Enter the weight number you practiced for that exercise."
  },
  set: {
    type: Number,
    required: "Enter the number of sets you did for that exercise."
  },
  rep: {
    type: Number,
    required: "Enter the number of reps you did for each set."
  },
  duration: {
    type: Number,
    required: "Enter the duration of your exercise."
  }
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;
