const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    hobbies: {
        type: [String]
    },
    department: {
        type: String,
        required: true
    },
    address: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Student", studentSchema);