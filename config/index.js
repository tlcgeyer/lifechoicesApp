import { createPool } from 'mysql';
import {config} from "dotenv"
config() //Importing mysql data for we will be working with a database.

//Creating a database connection: we created a pool for us to set up the database connection
// The port number is set by default hence there is no need to add one. 
let connection = createPool({
    host: process.env.HOST,
    database: process.env.DBName,
    user: process.env.UserName,
    password: process.env.UserPass,
    multipleStatements: true ,
    connectionLimit: 30
})
export {
    connection
}
