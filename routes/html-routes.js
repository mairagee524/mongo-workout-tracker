const db = require('../models')
const path = require('path');

module.exports = app => {

//index
     app.get('/', (req, res) => {
          res.sendFile(path.join(__dirname, '../views/index.html'));
     });

     //exercise
     app.get('/exercise', (req, res) => {
          res.sendFile(path.join(__dirname, '../views/exercise.html'));
     });

     //stats
     app.get('/stats', (req, res) => {
          res.sendFile(path.join(__dirname, '../views/stats.html'));
     });
}