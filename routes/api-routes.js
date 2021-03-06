var db = require("../models");

// Routes
module.exports = app => {
  // GET route for getting all of the posts
  app.get("/api/workouts", (req, res) => {
    // finding all workouts
    db.Workout.find()
      .then(result => res.json(result))
      .catch(err => res.json(err));
  });

  // UPDATE the workout represented by the :id with the information
  // included in the body
  app.put('/api/workouts/:id', async (req, res) => {
    const currentWorkout = await db.Workout.findById(req.params.id)

    currentWorkout.exercises.push(req.body);

    res.json(await currentWorkout
      .save())
  })

  app.post("/api/workouts", async (req, res) => {
    // db.Workout.create({}).then(result => res.json(result));

    // create new workout
    const newWorkout = new db.Workout();

    // push results to browser
    res.json(await newWorkout
      .save())
  });

  // whats the range?
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find().limit(7)
      .then(result => res.json(result))
      .catch(err => res.json(err));
  });
}