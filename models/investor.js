const mongoose = require('mongoose')
const investor_schema = mongoose.Schema({

    first_name: {
        type: String,
        default: '',
        required: [true, 'Investor first name is required'],
        minlength: [2, 'Investor first name must be at least 2 characters long'],
        maxlength: [100, 'Investor first name must be at most 100 characters long']
    },

    last_name: {
        type: String,
        default: '',
        required: [true, 'Investor last name is required'],
        minlength: [2, 'Investor last name must be at least 2 characters long'],
        maxlength: [100, 'Investor last name must be at most 100 characters long']
    },

    email: {
        type: String,
        default: '',
        required: [true, 'Investor email is required'],
        minlength: [11, 'Investor email must be at least 11 characters long'],
        maxlength: [200, 'Investor email must be at most 200 characters long']
    },

    password: {
        type: String,
        default: '',
        required: [true, 'Investor account password is required'],
        minlength: [8, 'Investor account password must be at least 8 characters long'],
        maxlength: [100, 'Investor account password must be at most 100 characters long']
    },    

    date_of_birth: {
        type: Date,
        default: Date.now,
        required: [true, 'Investor date of birth is required']
    },  

    gender: {
        type: String,
        default: '',
        required: [true, 'Investor gender is required'],
        minlength: [3, 'Investor gender must be at least 3 characters long'],
        maxlength: [15, 'Investor gender must be at most 15 characters long']
    }, 
    
    place_of_birth: {
        type: String,
        default: '',
        required: [true, 'Investor place of birth is required'],
        minlength: [2, 'Investor place of birth must be at least 2 characters long'],
        maxlength: [100, 'Investor plae of birth must be at most 100 characters long']
    }, 
    
    place_of_residence: {
        type: String,
        default: '',
        required: [true, 'Investor place of residence is required'],
        minlength: [2, 'Investor place of residence must be at least 2 characters long'],
        maxlength: [100, 'Investor plae of residence must be at most 100 characters long']
    },

    profile_picture: {
        type: String,
        default: ''
    },

    emirates_id_images: {
        type: [String],
        default: [],
        required: [true, 'Investor Emirates ID images are required'],
        validate: [array_limit, 'Investor Emirates ID front and back images are required']
    }
}, {timestamps: true})

function array_limit(val){
    return val.length == 2
}

module.exports = mongoose.model('Investor', investor_schema)