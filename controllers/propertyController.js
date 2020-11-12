//this file is responsible for handling all resource requests for the
//resource type Property

//imports
const Property = require("../models/property")

module.exports = {

    //gets all instances of the type property satisfying the query condition
    get: (params) => {
        return new Promise((resolve, reject) => {
            Property.find(params)
            .then((data) => resolve(data))
            .catch((error) => reject(error))
        })
    },

    //gets a unique instance of the type property having the id specified
    get_by_id: (params) => {
        return new Promise((resolve, reject) => {
            Property.findById(params)
            .then((data) => resolve(data))
            .catch((error) => reject(error))
        })
    },

    //creates an instance of the type property with the specified details and stores it in the database
    post: (params) => {
        return new Promise((resolve, reject) => {
            Property.create(params)
            .then((data) => resolve(data))
            .catch((error) => reject(error))
        })
    },

    //updates an instance of the type property as uniquely identified by the ID with the data provided
    put: (params1, params2) => {
        return new Promise((resolve, reject) => {
            Property.findByIdAndUpdate(params1, params2, {new:true})
            .then((data) => resolve(data))
            .catch((error) => reject(error))
        })
    },

    //deletes an instance of the type property as uniquely identified by the ID
    delete: (params) => {
        return new Promise((resolve, reject) => {
            Property.findByIdAndDelete(params)
            .then(() => resolve({id: params}))
            .catch((error) => reject(error))
        })
    }

}