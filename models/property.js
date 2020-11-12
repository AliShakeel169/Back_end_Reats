//this file specifies the schema for the Property resource
//this will make sure that all instances of the type Property have
//predefined attributes - which are also validated for correctness

//imports
const mongoose = require('mongoose')

//creating the schema
const property_schema = mongoose.Schema({

    images: {
        type: [String],
        default: [],
        required: [true, 'Atleast one property image is required']
    },

    price: {
        type: Number, 
        default: 0, 
        required: [true, 'Property price is required'],
        min: [0, 'Property price must be positive']
    },

    property_type: {
        type: String, 
        default: '', 
        required: [true, 'Property type is required']
    },

    location: {
        type: String, 
        default: '', 
        required: [true, 'Property location is required']
    },

    developer: {
        type: String, 
        default: '', 
        required: [true, 'Property developer name is required']
    },

    area: {
        type: Number, 
        default: 0, 
        required: [true, 'Property area is required'],
        min: [0, 'Property area must be positive']
    },

    beds: {
        type: Number, 
        default: 0, 
        required: [true, 'Number of property beds is required'],
        min: [0, 'Number of property beds must be positive']
    },

    baths: {
        type: Number, 
        default: 0, 
        required: [true, 'Number of property baths is required'],
        min: [0, 'Number of property baths must be positive']
    },

    parking_spaces: {
        type: Number, 
        default: 0, 
        required: [true && Number.isInteger, 'Number of parking spaces is required'],
        min: [0, 'Number of property parking spaces must be positive']
    },

    furnitured: {
        type: Boolean, 
        default: false, 
        required: [true, 'Property furnitured status is required']
    },

    pet_friendly: {
        type: Boolean, 
        default: false, 
        required: [true, 'Property pet friendly status is required']
    },

    for_sale: {
        type: Boolean, 
        default: false, 
        required: [true, 'Whether or not property is available for sale is required']

    },

    for_rent: {
        type: Boolean, 
        default: false, 
        required: [true, 'Whether or not property is available for rent is required']

    }


}, 
{timestamps: true})

//exporting the model
module.exports = mongoose.model("Property", property_schema)