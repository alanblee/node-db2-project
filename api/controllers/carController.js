const carDB = require("../../data/dbConfig");
const validation = require("../../validation/carValidation").isValid;
//GET all cars
module.exports.getAllCars = async (req, res) => {
  try {
    const allCars = await carDB("cars");
    if (allCars.length > 0) {
      res.status(200).json(allCars);
    } else {
      res.status(404).json({ message: "No cars found." });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching all cars", err: err.message });
  }
};

//POST creates new car
module.exports.createCar = async (req, res) => {
  const { vin, make, model, mileage, transmissionType, title } = req.body;
  if (!validation(req.body)) {
    res
      .status(400)
      .json({ message: "Please provide VIN, MAKE, MODEL and MILEAGE." });
  } else {
    const newCarInfo = {
      vin,
      make,
      model,
      mileage,
      transmissionType,
      title,
    };
    try {
      const createdCar = await carDB("cars").insert(newCarInfo);
      if (createdCar) {
        res.status(201).json(createdCar);
      }
    } catch (err) {
      res.status(500).json({ message: "Error adding cars", err: err.message });
    }
  }
};

//GET specific car
module.exports.getSingleCar = async (req, res) => {
  const carId = Number(req.params.carId);
  try {
    const singleCar = await carDB("cars").where({ id: carId }).first();
    if (singleCar.id === carId) {
      res.status(200).json(singleCar);
    } else {
      res.status(404).json({ message: "No cars found with that id" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching cars", err: err.message });
  }
};

//DELETE
module.exports.deleteCar = async (req, res) => {
  const carId = Number(req.params.carId);
  try {
    const count = await carDB("cars").where({ id: carId }).del();
    if (count > 0) {
      res.status(200).json(count);
    } else {
      res.status(404).json({ message: "No car found with that id." });
    }
  } catch (err) {
    res.status(500).json({ message: "Error deleting car" });
  }
};

//EDIT
module.exports.editCar = async (req, res) => {
  const { vin, make, model, mileage, transmissionType, title } = req.body;
  const carId = Number(req.params.carId);
  if (!validation(req.body)) {
    res
      .status(400)
      .json({ message: "Please provide VIN, MAKE, MODEL and MILEAGE." });
  } else {
    try {
      const updatedCarInfo = {
        vin,
        make,
        model,
        mileage,
        transmissionType,
        title,
      };
      const count = await carDB("cars")
        .where({ id: carId })
        .update(updatedCarInfo);
      console.log(count);
      if (count > 0) {
        res.status(200).json(count);
      } else {
        res.status(404).json({ message: "No car found with that id." });
      }
    } catch (err) {
      res.status(500).json({ message: "Error updating car", err: err.message });
    }
  }
};
