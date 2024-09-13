import {compare} from 'bcrypt'
import { selectUsersDb } from '../model/userDB.js'
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'

config()
const checkUser=async(req,res,next)=>{
    
    const {username, password} =req.body
    let hashedP =(await selectUsersDb(username)).password
    console.log(hashedP);

let result = await compare(password,hashedP )
console.log(result);

        if(result ==true) {
            
            let token =jwt.sign({username:username},process.env.SECRET_KEY)
            // console.log(token);
             
            req.body.token =token
             next()
        }else{
            res.send("Please sign in with the correct  Password/Username !!")  
        }
       
            
             

        // let outcome = await compare(emailAdd ,emailAdd)
        // // console.log(result);
        
        //         if(outcome ==true) {
        //             let token =jwt.sign({emailAdd:emailAdd},process.env.SECRET_KEY)
        //             // console.log(token);
                     
        //             req.body.token = token
        //             next()
        //         } else{
        //                 res.send("Please sign in with the correct Email  !!")  
        //         }
        


}
const verifyAToken =(req,res,next)=>{
    let {cookie} =req.headers   
    // //checks if the token exists first
    let token = cookie && cookie.split ('=')[1]
    // // console.log(cookie);
    
    jwt.verify(token ,process.env.SECRET_KEY,(err,decoded)=>{
        if(err){
            res.json({message:'Token invalid'})
        }else{
              req.body.user =decoded.username
        // console.log(decoded);
           next()
        }
   
    })
    
}

export {checkUser,verifyAToken}