const express = require("express");
const router = express.Router();

//Mongodb user model:
const Teacher = require("./../models/Teacher");

//Password encryption
const bcrypt = require("bcrypt");

//Route: Teacher Signup
router.post("/Signup", (req, res) => {
  let { email, password,name,qualification,experience } = req.body;
  email = email.trim();
  password = password.trim();
  name = name.trim();
  qualification = qualification.trim();
  experience = experience.trim();

  if (email == "" || password == "" || name == "" || qualification == "" || experience == "") {
    res.json({
      status: "Failed",
      message: "Empty input fields",
    });
  } else {
    //check if the Teacher already exists
    Teacher.find({ email })
      .then((result) => {
        if (result.length) {
          //A Teacher already exists
          res.json({
            status: "Failed",
            message: "Teacher already exists",
          });
        } else {
          // Create new Teacher

          //Passowrd handeling
          const saltRounds = 10;
          bcrypt
            .hash(password, saltRounds)
            .then((hashedPassword) => {
              const newTeacher = new Teacher({
                email,
                password: hashedPassword,
                name,
                qualification,
                experience

              });

              newTeacher
                .save()
                .then((result) => {
                  res.json({
                    status: "Success",
                    message: "Signup Sucessfull",
                    data: result,
                  });
                })
                .catch((err) => {
                  res.json({
                    status: "Failed",
                    message: "An error occured while signup",
                  });
                });
            })
            .catch((err) => {
              res.json({
                status: "Failed",
                message: "An Error while hashing password",
              });
            });
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({
          status: "Failed",
          message: "An error occured while checking if Teacher exists",
        });
      });
  }
});

//Route: Signin
router.post("/Signin", (req, res) => {
  let { email, password } = req.body;
  email = email.trim();
  password = password.trim();

  if (email == "" || password == "") {
    res.json({
      status: "FAILED",
      message: "Empty credentials supplied",
    });
  } else {
    // Check if Teacher exist
    Teacher.find({ email })
      .then((data) => {
        if (data.length) {
          // Teacher exists

          const hashedPassword = data[0].password;
          bcrypt
            .compare(password, hashedPassword)
            .then((result) => {
              if (result) {
                // Password match
                res.json({
                  status: "SUCCESS",
                  message: "Signin successful",
                  data: data,
                });
              } else {
                res.json({
                  status: "FAILED",
                  message: "Invalid password entered!",
                });
              }
            })
            .catch((err) => {
              res.json({
                status: "FAILED",
                message: "An error occurred while comparing passwords",
              });
            });
        } else {
          res.json({
            status: "FAILED",
            message: "Invalid credentials entered!",
          });
        }
      })
      .catch((err) => {
        res.json({
          status: "FAILED",
          message: "An error occurred while checking for existing Teacher",
        });
      });
  }
});






module.exports = router;
