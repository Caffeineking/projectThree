const router = require("express").Router();
const familyRestaurant = require("../models/familyRestaurant.js");



router.get("/home", function(req, res) {
  res.send("Family Restaurant");
});



router.get("/allRestaurant", function(req, res) {
  // axios.get
  // Grab every document in the Articles collection
  db.familyRestaurant.findAll({})
    .then(function(data) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(data);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});



module.exports = router;