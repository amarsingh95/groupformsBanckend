import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql';
import {convertToJSON,firstPosArr} from '../untis/common.js'


const connection=mysql.createConnection(
    {
        user:process.env.DBUSER,
        password:process.env.DBPSWD,
        database:process.env.DBNAME
    });

    connection.connect(function(err){
        if(err)
        {
            console.log(err)
        }
    })

 const requestQueryHandler=function(queryStr,param) {
    return new Promise((resolve, reject) => {
        connection.query(queryStr,param,(err, results) => {
            if (err) {
                console.log(err)
                return reject(error);
            }
            // resolve(convertToJSON(firstPosArr(results)));
            resolve(convertToJSON(results));
        })
    })

} 

  export {connection,requestQueryHandler};