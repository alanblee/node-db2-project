const express = require("express");
const router = express.Router();
const carCtrl = require("../controllers/carController");

//READ
router.route("/").get(carCtrl.getAllCars);
//CREATE
router.route("/").post(carCtrl.createCar);
//READ
router.route("/:carId").get(carCtrl.getSingleCar);
//DELETE
router.route("/:carId").delete(carCtrl.deleteCar);
//PUT
router.route("/:carId").put(carCtrl.editCar);

module.exports = router;
