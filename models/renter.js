const mongoose = require('mongoose')
const renter_schema = mongoose.Schema({

    first_name: {
        type: String,
        default: '',
        required: [true, 'Renter first name is required'],
        minlength: [2, 'Renter first name must be at least 2 characters long'],
        maxlength: [100, 'Renter first name must be at most 100 characters long']
    },

    last_name: {
        type: String,
        default: '',
        required: [true, 'Renter last name is required'],
        minlength: [2, 'Renter last name must be at least 2 characters long'],
        maxlength: [100, 'Renter last name must be at most 100 characters long']
    },

    email: {
        type: String,
        default: '',
        required: [true, 'Renter email is required'],
        minlength: [11, 'Renter email must be at least 11 characters long'],
        maxlength: [200, 'Renter email must be at most 200 characters long']
    },

    password: {
        type: String,
        default: '',
        required: [true, 'Renter account password is required'],
        minlength: [8, 'Renter account password must be at least 8 characters long'],
        maxlength: [100, 'Renter account password must be at most 100 characters long']
    },    

    date_of_birth: {
        type: Date,
        default: Date.now,
        required: [true, 'Renter date of birth is required']
    },  

    gender: {
        type: String,
        default: '',
        required: [true, 'Renter gender is required'],
        minlength: [3, 'Renter gender must be at least 3 characters long'],
        maxlength: [15, 'Renter gender must be at most 15 characters long']
    }, 
    
    place_of_birth: {
        type: String,
        default: '',
        required: [true, 'Renter place of birth is required'],
        minlength: [2, 'Renter place of birth must be at least 2 characters long'],
        maxlength: [100, 'Renter plae of birth must be at most 100 characters long']
    }, 
    
    place_of_residence: {
        type: String,
        default: '',
        required: [true, 'Renter place of residence is required'],
        minlength: [2, 'Renter place of residence must be at least 2 characters long'],
        maxlength: [100, 'Renter plae of residence must be at most 100 characters long']
    },

    profile_picture: {
        type: String,
        default: ''
    },

    emirates_id_images: {
        type: [String],
        default: [],
        required: [true, 'Renter Emirates ID images are required'],
        validate: [array_limit, 'Renter Emirates ID front and back images are required']
    }
}, {timestamps: true})

function array_limit(val){
    return val.length == 2
}

module.exports = mongoose.model('Renter', renter_schema)