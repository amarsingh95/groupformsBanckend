import {getGender,getCountry,getTopic,getLanguage,getMaster,saveUniversity} from '../controllers/master.controller.js'
import express from "express";
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.json({name:'Anonymous'});
})

router.get('/gender',async (req,res,next)=>{
    let data=await getMaster(getGender());
    res.json(data);
})

router.get('/country',async (req,res,next)=>{
    let data=await getMaster(getCountry());
    res.json(data);
})

router.get('/topic',async (req,res,next)=>{
    let data=await getMaster(getTopic());
    res.json(data);
})

router.get('/language',async (req,res,next)=>{
    let data=await getMaster(getLanguage());
    res.json(data);
})

router.post('/university',(req,res,next)=>{
    let data=JSON.stringify(req.body)
    saveUniversity(JSON.parse(data));
    res.json({name:'Anonymous'})
})

export {router};