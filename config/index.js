import { createPool } from 'mysql';
import {config} from "dotenv"
config() //Importing mysql data for we will be working with a database.

//Creating a database connection: we created a pool for us to set up the database connection
// The port number is set by default hence there is no need to add one. 
let connection = createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_Name,
    user: process.env.DB_UserName,
    password: process.env.DB_UserPass,
    multipleStatements: true ,
    connectionLimit: 30
})
export {
    connection
}
