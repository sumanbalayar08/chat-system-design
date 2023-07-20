const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { check, validationResult } = require("express-validator");

router.post(
  "/createuser",[
    check('username').isLowercase(),
    check('email').isEmail(),
    check('password').isLength({ min: 5 })
  ],
  async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      console.log(errors.array()); // Log the array of errors
      return res.status(422).send({ success: false, message: 'Message Validation Failed' })
    }

    try {
      await User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      });
      res.status(200).send({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).send({ success: false, message: 'Server Error' });
    }
  }
);

router.post(
    "/loginuser",[
      check('username').isLowercase(),
      check('password').isLength({min:5})
    ],
    async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).send({success:false,message:'Message Validation Failed'})
    }
  
      try {
        const ExistingUser = await User.findOne({
          username: req.body.username,
          password: req.body.password,
        });
        if(ExistingUser){
          console.log("User Found")
            res.status(200).send({ success: true,username:req.body.username});
        }else{
            res.status(200).send({success:false,message:'No User Found'})
        }
      } catch (error) {
        console.log(error);
        res.status(200).send({ success: false });
      }
    }
  );

module.exports = router;
