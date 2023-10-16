
const mongoose = require('mongoose');
 
const formDataSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: true,
        unique: false
    },
    Email: {
        type: String,
        require: true,
        unique: false
    },
    Phone: {
        type: Number,
        require: true,
        unique: false
    },
    City: {
        type: String,
        require: true,
    },
    course: {
        type: String,
        require: true,
    },
    DistanceCourse: {
        type: Boolean,
        require: true,
        default: false,
    }
}, {
    timestamps: true
});


const FormDataSchema = mongoose.model('FormDataSchema', formDataSchema);

module.exports = FormDataSchema;