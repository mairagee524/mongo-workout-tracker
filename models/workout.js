const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises: [
    {
      type: { type: String }, // cardio or resitance
      weight: Number,
      set: Number,
      rep: Number,
      duration: {
        type: Number,
        required: true 
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a type of cardio you did."
      },
      distance: Number,
    },
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
