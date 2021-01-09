require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')

const port = process.env.PORT || 4000;
const app = express();
const todoRoutes = require('./routes/todoRoutes')

mongoose.connect(
    process.env.MONGODB_URI,    
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false},
    err => {
    if(err) {
        console.error("Mongo Connection Error", err)
    } else {
        console.log('Database Connected')
    }
})

app.use(cors())
app.use(express.json())

app.use("/", todoRoutes)

app.listen(port, ()=> {
    console.log(`server is up on port ${port}`)
});