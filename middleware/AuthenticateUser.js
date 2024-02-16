import {config} from "dotenv";
config()

// To create a token we have to first : PS: sign is used to create a token
import { sign, verify } from "jsonwebtoken";

const {sign, verify} = jwt;
// Creating a token.
function createToken(user) {
    return sign({ //to create a token make use of the function sign and to verify the token make use of the token function 'verify'
        emailAdd: user.emailAdd,
        userPwd: userPwd
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    }
    )
}
/*When creating a user is when we create a token. When the user logins that is when the verifying of the token happens.
A token can also be an ID to identify the user  who is currently logged in. */
// Verifying the token.
function verifyAToken(req, res, next) { 
    // Retrieve a token from the browser
    const token = req?.headers['Authorization'] //to prevent a null error we make use of ? fore we do not wanna get a issue with undefined
    if(token) { //this 'if' statement is a NESTED IF STATEMENT
        if(verify(token, process.env.
            SECRET_KEY)) {
                next()
            }else {
                res?.json({
                    status: res.statusCode,
                    msg: "Please provide the correct credentials."
                })
            }
    }else {// if the user does not have a token
        res?.json({
            status: res.statusCode,
            msg: "Please login"
        })
}
}
export {
    createToken,
    verifyAToken
}