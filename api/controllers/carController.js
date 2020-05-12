const carDB = require("../../data/dbConfig");

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
  console.log("hello post");
};
