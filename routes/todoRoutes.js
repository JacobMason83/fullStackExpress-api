const { response } = require("express")
const express = require("express")
const router = express.Router()
const todos = require("../models/todoModel")

//get route
router.get("/todos", (request, res) => {
    console.log("We out here")
    res.end()
})


module.exports = router