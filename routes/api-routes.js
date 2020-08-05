var db = require("../models");

// Routes
module.exports = app => {
  // GET route for getting all of the posts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find().then(result => res.json(result));
  });

  // UPDATE the workout represented by the :id with the information
  // included in the body
  app.put('/api/workouts/:id', async (req, res) => {
    const currentWorkout = await db.Workout.findById(req.params.id)

    currentWorkout.exercises.push(req.body)

    res.json(await currentWorkout.save())
  })

  app.post("/api/workouts", async (req, res) => {
    // db.Workout.create({}).then(result => res.json(result));
    console.log(req.body);
    console.log("fashfdjaks");

    // create new workout
    const newWorkout = new db.Workout();

    // push results to browser
    res.json(await newWorkout.save());
  });

  // whats the range?
  app.get("/api/workouts/range", async (req, res) => {
    db.Workout.find().then(result => res.json(result));
  });

}
