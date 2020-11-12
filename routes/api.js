//this file contains all the REST API methods required to read, insert
//update and delete data for all the relevant resource types in the
//database


//imports
const express = require('express')
const controllers = require('../controllers')

//creating a router
const router = express.Router()

// GET - retrieves all instances of the specified resource from the database
router.get('/:resource', (req, res) => {
    const resource = req.params.resource
    const query = req.query
    const controller = controllers[resource]
    if(controller == null){
        return res.status(200).json({
            confirmation: 'fail',
            message: 'invalid request. resource undefined'
        })
    }

    controller.get(query)
    .then(data => {
        res.json({
            confirmation: 'success',
            data: data
        })
    })
    .catch(error => {
        return res.status(400)
        .json({
            confirmation: 'fail',
            message: error.message
        })
    })

})

// GET - retrieves a unique instance of the resource type specified by id from the database
router.get('/:resource/:id', (req, res) => {

    const resource = req.params.resource
    const id = req.params.id
    const controller = controllers[resource]

    if(controller == null){
        return res.status(400).json({
            confirmation: 'fail',
            message: 'invalid request.resource undefined'
        })
    }

    controller.get_by_id(id)
    .then(data => {
        res.json({
            confirmation: 'success',
            data: data
        })
    })
    .catch(error => {
        return res.status(400).json({
            confirmation: 'fail',
            message: error.message
        })
    })

})

// POST - creates a new instance of the specified resource type and stores supplied information (after validation) in the database
router.post('/:resource', (req, res) => {

    const resource = req.params.resource
    const controller = controllers[resource]

    if(controller == null){
        return res.status(400).json({
            confirmation: 'fail',
            message: 'invalid request. resource undefined'
        })
    }

    controller.post(req.body)
    .then(data => {
        res.json({
            confirmation: 'success',
            data: data
        })
    })
    .catch(error => {
        return res.status(400).json({
            confirmation: 'fail',
            error: error.message
        })
    })

})

//PUT - updates an instance of the specified resource as uniquely identified by the id
router.put('/:resource/:id', (req, res) => {
    const resource = req.params.resource
    const id = req.params.id
    const controller = controllers[resource]

    if(controller == null){
        return res.status(400).json({
            confirmation: 'fail',
            message: 'invalid request. resource undefined'
        })
    }

    controller.put(id, req.body)
    .then(data => {
        res.json({
            confirmation: 'success',
            data: data
        })
    })
    .catch(error => {
        return res.status(400).json({
            confirmation: 'fail',
            error: error.message
        })
    })
})

//PUT - updates all instances of the specified resource as satisfying 
//the query
router.put('/:resource', (req, res) => {

    const resource = req.params.resource
    const query = req.query
    const controller = controllers[resource]

    if(controller == null){
        return res.status(400).json({
            confirmation: 'fail',
            message: 'invalid request. resource undefined'
        })
    }

    controller.put(query, req.body)
    .then(data => {
        res.json({
            confirmation: 'success',
            data: data
        })
    })
    .catch(error => {
        return res.status(400).json({
            confirmation: 'fail',
            error: error.message
        })
    })

})

//DELETE - deletes an instance of the specified resource as uniquely identified by the id
router.delete('/:resource/:id', (req, res) => {
    const resource = req.params.resource
    const id = req.params.id
    const controller = controllers[resource]

    if(controller == null){
        return res.status(400).json({
            confirmation: 'fail',
            message: 'invalid request. resource undefined'
        })
    }

    controller.delete(id)
    .then(data => {
        res.json({
            confirmation: 'success',
            data: data
        })
    } )
    .catch(error => {
        return res.status(400).json({
            confirmation: 'fail',
            error: error.message
        })
    })
})

module.exports = {router}