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
      res
        .status(500)
        .json({ message: "Error adding cars", err: err.message });
    }
  }
};
