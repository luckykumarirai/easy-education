const express = require("express");
const router = express.Router();

//Mongodb user model:
const User = require("./../models/User");

//MongoDb contactUS schema:
const ContactSchema = require("./../models/ContactUsModel")

//MongoDb ContactUs footer schema
const ContactSchemaFooter = require("./../models/ContactUsFooter")

//Password encryption
const bcrypt = require("bcrypt");

//Route: Signup
router.post("/Signup", (req, res) => {
  let { email, password } = req.body;
  email = email.trim();
  password = password.trim();

  if (email == "" || password == "") {
    res.json({
      status: "Failed",
      message: "Empty input fields",
    });
  } else {
    //check if the user already exists
    User.find({ email })
      .then((result) => {
        if (result.length) {
          //A user already exists
          res.json({
            status: "Failed",
            message: "User already exists",
          });
        } else {
          // Create new User

          //Passowrd handeling
          const saltRounds = 10;
          bcrypt
            .hash(password, saltRounds)
            .then((hashedPassword) => {
              const newUser = new User({
                email,
                password: hashedPassword,
              });

              newUser
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
                message: "An Error while hshing password",
              });
            });
        }
      })
      .catch((err) => {
        console.log(err);
        res.json({
          status: "Failed",
          message: "An error occured while checking if user exists",
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
    // Check if user exist
    User.find({ email })
      .then((data) => {
        if (data.length) {
          // User exists

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
          message: "An error occurred while checking for existing user",
        });
      });
  }
});


//Route: ContactUs
router.post("/ContactUsSubmit", (req, res) => {
  let { email, first_name,last_name,message,contact } = req.body;
  email = email.trim();
  first_name = first_name.trim();
  last_name = last_name.trim();
  contact = contact.trim();
  const newMessage = new ContactSchema({first_name,last_name,email,contact,message});
  newMessage
                .save()
                .then((result) => {
                  res.json({
                    status: "Success",
                    message: "Message Submitted Successfully",
                    data: result,
                  });
                })
                .catch((err) => {
                  res.json({
                    status: "Failed",
                    message: "An error occured while submitting signup",
                  });
                });
            })


//Route: ContactUs
router.post("/ContactUsFooterSubmit", (req, res) => {
  let { email, message } = req.body;
  email = email.trim();
  const newMessage = new ContactSchemaFooter({email,message});
  newMessage
                .save()
                .then((result) => {
                  res.json({
                    status: "Success",
                    message: "Message Submitted Successfully",
                    data: result,
                  });
                })
                .catch((err) => {
                  res.json({
                    status: "Failed",
                    message: "An error occured while submitting the message",
                  });
                });
            })

module.exports = router;
