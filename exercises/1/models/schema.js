const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Structure = new Schema({
    reg_nbr: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    serial_nbr: {
        type: Number,
        required: true
    }
}, {timestamps: true});

const model = mongoose.model('student', Structure);
module.exports = model;