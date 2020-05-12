const express = require("express");
const router = express.Router();
const carCtrl = require("../controllers/carController");

//GET
router.route("/").get(carCtrl.getAllCars);
//CREATE
router.route("/").post(carCtrl.createCar);

module.exports = router;
