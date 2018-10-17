const express =  require('express');
const apiRouter = express.Router()
const Usermodel = require('../models/UserModel') ;
const lodash = require('lodash')

    // Get all info users
    apiRouter.get('/allusers',(req,res)=>{
        Usermodel.find({},(err,UserFound)=>{
            if(err) console.log(err)
            else res.status(201).send({success:1 , UserFound})
            if(!UserFound) res.json({success:0 , mess:"User not exist!!"})
        })
    })

   
    apiRouter.post('/',(req,res)=>{
            const {username,password} = req.body;
            Usermodel.create({username,password}, (err,gotInfoUserFaceBook)=>{
                if(err) res.status(500).send({success:0 , mess:"Can't get info user!"+ err})
                else res.status(201).send({success:1, gotInfoUserFaceBook})
            })

    })
module.exports = apiRouter;