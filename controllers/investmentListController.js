const InvestmentList = require('../models/investment_list')
module.exports = {
    get: (params) => {
        return new Promise((resolve, reject) => {
            InvestmentList.find(params)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    },

    post: (params) => {
        return new Promise((resolve, reject) => {
            InvestmentList.create(params)
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    },

    put: (params1, params2) => {
        return new Promise((resolve, reject) => {
            InvestmentList.updateMany(params1, params2, {new:true})
            .then(data => resolve(data))
            .catch(error => reject(error))
        })
    }
}