//this file is reposnsible for packaging and exporting all resource
//controllers appropriately

//imports
const propertyController = require('./propertyController')
const renterController = require('./renterController')
const rentContractController = require('./rentContractController')
const investorController = require('./investorController')
const investmentListController = require('./investmentListController')

//exports
module.exports = {
    properties: propertyController,
    renters: renterController,
    rent_contracts: rentContractController,
    investors: investorController,
    investment_lists: investmentListController
}