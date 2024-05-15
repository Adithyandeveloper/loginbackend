const mongoose = require('mongoose');

const userListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    createdTime :{
        type :Date,
        default:Date.now()
    }
})

const userList = mongoose.model("userList", userListSchema);
module.exports = userList;
