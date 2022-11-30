const express = require("express");

const app = express()

app.use(express.json())

app.listen(24390,()=>{
    console.log("server start")
})