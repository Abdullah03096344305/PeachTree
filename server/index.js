const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/employee");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/employee", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle registration
app.post("/register", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Basic validation
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Create employee record without confirmPassword
  EmployeeModel.create({ firstName, lastName, email, password })
    .then((employee) => {
      res
        .status(201)
        .json({ message: "Employee registered successfully", employee });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: "Error: " + err.message });
    });

  console.log(req.body); // Log request body
});


// Start server
app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
