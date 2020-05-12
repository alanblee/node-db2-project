require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//import routes
const carRoutes = require("./api/routes/carRoutes");
//use routes
app.get("/", (req, res) => {
  res.send(`<h2>node api sprint challenge deployed!</h2>`);
});
app.use("/api/cars", carRoutes);
//port config
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
