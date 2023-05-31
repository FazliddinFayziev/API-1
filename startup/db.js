const mongoose = require('mongoose');

module.exports = function () {
    mongoose.connect('mongodb+srv://fazrez4515:ZmFmRf4515@cluster0.fwoxgwi.mongodb.net/Renting?retryWrites=true&w=majority')
        .then(() => console.log('Connected to MongoDB...'))
        .catch(err => console.log("Could not connectt to MongoDb"))
}