import {requestQueryHandler } from '../dbconnection/connection.js';

const getGender=function()
{
    return 'select * from mastergender';
}

function getCountry()
{
    return 'select * from mastercountry';
}

const getTopic=function()
{
    return 'select * from mastertopic';
}

const getLanguage=function()
{
    return 'select * from masterlanguage';
}


const getMaster=async function(query)
{   
    let data =await requestQueryHandler(query,[]);
    return transformMaster(data);
}


const saveUniversity=async function(data)
{
    let insertUniuery="INSERT INTO studuniversity SET ?";
    let parmObj={university:data?.uname};
    let result=await requestQueryHandler(insertUniuery,parmObj);
}


function transformMaster(arr)
{
    return arr.map((dt)=>{ 
        let key=Object.keys(dt)[1];
        return {id:dt.id,text:dt[key],value:dt[key]} 
    })
}

export {getGender,getCountry,getTopic,getLanguage,getMaster,saveUniversity}