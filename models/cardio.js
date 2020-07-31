const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a type of cardio you did."
  },
  distance: {
    type: Number,
    required: "Enter the number of miles you did."
  },
  duration: {
    type: Number,
    required: "Enter the duration of the cardio."  
  }
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;
