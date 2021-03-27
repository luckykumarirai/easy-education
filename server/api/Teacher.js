const express = require("express");
const router = express.Router();

//Mongodb user model:
const Teacher = require("./../models/Teacher");

//Password encryption
const bcrypt = require("bcrypt");

//Route: Teacher Signup
router.post("/Signup", (req, res) => {
  let { email, password,name,qualification,experience } = req.body;
    const emailRegx = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    const pwdRegex = new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)

  if (email == null || password == null || name == null || qualification == null || experience == null) {
   return res.json({
      status: "Failed",
      message: "Empty input fields",
    });
  } else {

    email = email.trim();
    password = password.trim();
    name = name.trim();
    qualification = qualification.trim();
    experience = experience.trim();

    // check if email is in correct format
    if(!emailRegx.test(email)){
      return res.json({
        status: "Failed",
        message: "Enter a valid email",
      });
    }
    // Check if the password is in correct format or not
    if(!pwdRegex.test(password)){
      return res.json({
        status: "Failed",
        message: "Your password must contain a minimum of 8 letter, with at least a symbol, upper and lower case letters and a number",
      });
    }
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


  if (email == null || password == null) {
    res.json({
      status: "Failed",
      message: "Empty credentials supplied",
    });
  } else {
    // removed the trailing zeros
    email = email.trim();
    password = password.trim();

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
                  status: "Failed",
                  message: "Invalid password entered!",
                });
              }
            })
            .catch((err) => {
              res.json({
                status: "Failed",
                message: "An error occurred while comparing passwords",
              });
            });
        } else {
          res.json({
            status: "Failed",
            message: "Invalid credentials entered!",
          });
        }
      })
      .catch((err) => {
        res.json({
          status: "Failed",
          message: "An error occurred while checking for existing Teacher",
        });
      });
  }
});






module.exports = router;
