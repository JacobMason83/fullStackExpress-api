const express = require("express")

const port = process.env.Port ||4000;
const app = express();

app.listen(port, ()=> {
    console.log(`server is up on port ${port}`)
});