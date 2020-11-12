const mongoose = require('mongoose')
const investment_list_schema = mongoose.Schema({

    property_id: {
        type: String,
        required: [true, 'Property ID is required'],
        default: '',
        validator: [length_validator, 'Property ID must be 24 characters long']
    },

    investor_id: {
        type: String,
        required: [true, 'Investor ID is required'],
        default: '',
        validator: [length_validator, 'Investor ID must be 24 characters long']
    },

    date_of_purchase: {
        type: Date,
        required: [true, 'Property date of purchase is required'],
        default: Date.now
    },

    date_investment_withdrawn: {
        type: Date
    },

    amount_invested: {
        type: Number,
        required: [true, 'Investment amount is required'],
        default: 0,
        min: [0, 'Investment amount must be positive']
    },

    ownership_percentage: {
        type: Number,
        required: [true, 'Property ownership percentage is required'],
        default: 0,
        min: [1, 'Property ownership percentage must be at least 1'],
        max: [100, 'Property ownership percentage must be at most 100'],
    },

    status: {
        type: String,
        required: [true, 'Investment status is required'],
        default: '',
        enum: ['Active', 'Inactive']
    }
    
})

function length_validator(val){
    return val.length == 24
}

module.exports = mongoose.model('InvestmentList', investment_list_schema)