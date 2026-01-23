const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    package_name : {
        type : String,
    },
    price : {
        type : Number
    },
    image : {
        type : String
    }
})

const Packgae = mongoose.model('Package' , packageSchema);

module.exports = Packgae