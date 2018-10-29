const router = require('express').Router();



//REQUIRE ROUTES
const apiRoutes = require("./api");
const john = require("./john");
const joseph = require("./joseph");
const carrie = require("./carrie")


// INITIALIZE ROUTERS
router.use("/john", john);
router.use("/joseph", joseph);
router.use("/carrie", carrie);

module.exports = router; 