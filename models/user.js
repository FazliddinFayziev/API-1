const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const boolean = require('joi/lib/types/boolean');


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
    },
    isAdmin: {
        type: Boolean
    },
    // roles: [],
    // operations: []
})

UserSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, process.env.VIDLY_JWT_PRIVATE_KEY);
    return token;
}

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
