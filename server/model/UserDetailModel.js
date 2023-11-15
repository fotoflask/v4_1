const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true,
    },
    name: {
        type: String,
        required: [true, "Name is Required"],
    },
    phone: {
        type: String,
        required: [true, "Phone is Required"],
    },
    address: {
        type: String,
        required: [true, "Address is Required"],
    },
    });

module.exports = mongoose.model("UserCredentials", userDetailSchema);
