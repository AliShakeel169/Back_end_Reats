const Investor = require('../models/investor')
module.exports = {
    get: (params) => {
        return new Promise((resolve, reject) => {
            Investor.find(params)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    },

    get_by_id: (params) => {
        return new Promise((resolve, reject) => {
            Investor.findById(params)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    },

    post: (params) => {
        return new Promise((resolve, reject) => {
            Investor.create(params)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    },

    put: (params1, params2) => {
        return new Promise((resolve, reject) => {
            Investor.findByIdAndUpdate(params1, params2, {new:true})
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    },

    delete: (params) => {
        return new Promise((resolve, reject) => {
            Investor.findByIdAndDelete(params)
            .then(() => resolve({id: params}))
            .catch(error => reject(error))
        })
    }

}