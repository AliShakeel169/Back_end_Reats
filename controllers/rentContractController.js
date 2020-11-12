const RentContract = require('../models/rent_contract')
module.exports = {
    get: (params) => {
        return new Promise((resolve, reject) => {
            RentContract.find(params)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    },

    post: (params) => {
        return new Promise((resolve, reject) => {
            RentContract.create(params)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    },

    put: (params1, params2) => {
        return new Promise((resolve, reject) => {
            RentContract.updateMany(params1, params2, {new:true})
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    }
}