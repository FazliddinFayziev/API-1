const bcrypt = require('bcrypt');
const Joi = require('joi');
const _ = require('lodash');
const express = require('express');
const router = express.Router();
const { User } = require('../models/user');



router.post("/", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send("invalid E-mail or Password")

    // Decode hashed password and compare it with req.body.password
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).send("invalid E-mail or Password")

    const token = user.generateAuthToken();
    res.send(token);
});


// Validation check

function validate(req) {
    const schema = {
        email: Joi.string().min(5).required().email(),
        password: Joi.string().min(5).required()
    };

    return Joi.validate(req, schema);
}

module.exports = router