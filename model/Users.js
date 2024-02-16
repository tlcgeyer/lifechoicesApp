// The file is going to refer to the table we have in our database

import { connection as db} from "./config/index.js"; // the AS command in mysql can also be used in node.js to rename 

/*- Bcrypt is a valuable tool to use to hash and store passwords.
- Hashing converts any digital data into an output string with a fixed number of characters. 
- Salting is adding random data to a hash function to obtain a unique output which refers to a hash.*/ 
import { hash, compare } from "bcrypt";
import { createToken } from "./middleware/AuthenticateUser.js";

class Users {
    fetchUsers(req, res){
        // Information that is going to be displayed to the user
        const qry = ` 
        SELECT userID, firstName, lastName, userAge, gender, emailAdd,
        userPwd, userRole 
        FROM Users;
        `
        /*If it were to be a single user: 
        SELECT userID, firstName, lastName, userAge, gender, emailAdd,
        userPwd, userRole 
        FROM Users
        WHERE userID = ${req.params.id};*/
        db.query(qry, (err, results) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }

    async createUser(req, res) {
        // Payload
        let data = req.body //req.body object allows you to retrieve data sent in the request body
        data.userPwd = await hash(data?.userPwd, 10) //we want to encrypt the password
        let user = {
            emailAdd: data.emailAdd,
            userPwd: data.userPwd
        }
        const qry = `
        INSERT INTO Users
        SET ?;
        `
        db.query(qry, [data], (err)=> {
            if(err) {
                res.json({
                    status: res.statusCode,
                    msg: 'Email address already exists.'
                })
            }else {

                //Creating the token
                let token = createToken(user)
                res.json({
                    status: res.statusCode,
                    token,
                    msg: 'Registered!'
                })
            }
        })
    }
}
export {
    Users
}
