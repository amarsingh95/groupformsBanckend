import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from 'cors';

// import {requestQueryHandler } from './dbconnection/connection.js';
import {router} from './router/router.js';



const port = process.env.SERVERPORT || 8000;
const app = express();

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use('/api',cors(),router);



app.use(cors(),router)

// app.get('/', async(req, res, next) =>{
// const data=await requestQueryHandler("call getCustDetails()");
// const data1=await requestQueryHandler("call getCustInDetails('Arun')");

// res.json(data.concat(data1));
// })

app.listen(port, () => {
    console.log('App is running', port);
})

