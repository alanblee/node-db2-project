const express = require("express");
const router = express.Router();
const carCtrl = require("../controllers/carController");

//READ
router.route("/").get(carCtrl.getAllCars);
//CREATE
router.route("/").post(carCtrl.createCar);
//READ specific car
router.route("/:carId").get(carCtrl.getSingleCar);
module.exports = router;
