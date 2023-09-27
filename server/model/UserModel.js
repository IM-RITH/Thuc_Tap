const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required : true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default:''
    },
    email : {
        type :String,
        default: ''
    },
    portfolio: {
        type: String,
        default:'',
    },
    phoneNumber: {
        type: String,
        default: '',
    },
    address: {
        type: String,
        default: '',
    },
    education: {
        type: [],
        default: ['']
    },
    experience: {
        type: [],
        default:['']
    },
    skills: {
        type: [],
        default:['']
    },
    project:{ 
        type: [],
        default:['']
    },
    appliedJobs: []
}, {
    timestamps: true
});

const UserModel = new mongoose.model("users", userSchema);
module.exports = UserModel;  //exporting the model to be used in other files