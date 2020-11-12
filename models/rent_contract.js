const mongoose = require('mongoose')
const rent_contract_schema = mongoose.Schema({

    property_id: {
        type: String,
        required: [true, 'Property ID is required'],
        default: '',
        validator: [length_validator, 'Property ID must be 24 characters long']
    },

    renter_id: {
        type: String,
        required: [true, 'Renter ID is required'],
        default: '',
        validator: [length_validator, 'Renter ID must be 24 characters long']
    },

    start_date: {
        type: Date,
        required: [true, 'Rent contract start date is required'],
        default: Date.now
    },

    end_date: {
        type: Date,
        required: [true, 'Rent contract end date is required'],
        default: Date.now
    },

    price: {
        type: Number,
        required: [true, 'Rent contract price is required'],
        default: 0,
        min: [0, 'Rent contract price must be positive']
    },

    security_deposit: {
        type: Number,
        required: [true, 'Rent contract security deposit amount is required'],
        default: 0,
        min: [0, 'Rent contract security deposit amount must be positive']
    },

    status: {
        type: String,
        required: [true, 'Rent contract status is required'],
        default: '',
        enum: ['Active', 'Complete', 'Breached']
    }
    
})

function length_validator(val){
    return val.length == 24
}

module.exports = mongoose.model('RentContract', rent_contract_schema)