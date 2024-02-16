import bodyParser  from 'body-parser';
import { verifyAToken } from './middleware/AuthenticateUser.js';
import { users } from './model/index.js';
import express from 'express';
const userRouter = express.Router()

//Fetching the users 
userRouter.get('/', (req, res)=> {
    try{
        users.fetchUsers(req,res)
    }catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to retrieve users"
        })
    }
})

// Fetching a user
userRouter.get('/:id', (req, res)=> {
    try{
        users.fetchUser(req,res)
    }catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to retrieve user."
        })
    }
})

// Adding a new user : always use middleware(bodyParser) when using post and patch
userRouter.post('/register',bodyParser.json(), (req, res) => {
    try {
        users.createUser(req, res)
    }catch(e) {
        res.json ({
            status: res.statusCode,
            msg: "Failed to add new user."
        })
    }
})

export {
    userRouter , express
}

