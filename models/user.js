const mongoose = require('mongoose');
const Joi = require('Joi');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlenght: 5,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", UserSchema)


function validateUser(user) {
    const schema = {
        name: Joi.string().min(5).required(),
        email: Joi.string().min(5).required().email(),
        password: Joi.string().min(5).required()
    };

    return Joi.validate(user, schema);
}


exports.User = User
exports.validate = validateUser
