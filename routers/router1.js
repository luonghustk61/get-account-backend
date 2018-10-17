const express = require('express');
const web15 = express.Router();

web15.get('web15',(req,res)=>{
    res.status(201).send({mess:"hello babe"})
})
// ....