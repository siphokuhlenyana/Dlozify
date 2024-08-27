import { getUsersDb,selectUsersDb,insertUserDb,deleteUserDb,updateUserDb,selectUserDb} from '../model/userDB.js'
import {hash} from 'bcrypt'

const getUsers =async(req,res)=>{
    try{
    res.json(await getUsersDb())    
    }catch(e){
        res.status(500).send('Server error!')
    }
    
}

const selectUser = async(req,res)=>{
    // console.log(req.params.id);
    try{
     res.json(await selectUserDb(req.params.id))     
    }catch(e){
        res.status(400).send('Unable to get user !')
    }
  
    // res.send('Endpoint reached !')
    
}


const insertUser =async(req,res)=>{
    

    
    let {username,password,userProfile,userRole,bio,userAge,gender}= req.body
    let exisitingUsername = (await selectUsersDb(username)).username
    if (username == exisitingUsername) {
        res.status(403).send('Username already exisits')
        return
    } else{
        userRole = 'user'   
        userProfile = 'https://codjoelmayer.github.io/projectImages/images/profile-Image.png'
        
        hash(password,10,async(err,hashedP)=>{
            if(err) throw err
            console.log(hashedP);
            
            try{
                await insertUserDb(username,hashedP,userProfile,userRole,bio,userAge,gender)
                res.send('Data was inserted successfully !')
            }catch(e){
                res.status(400).send('All fields must be filled in , re-insert data !')
            }
        })
        
    }
}
    //     
    
       
    
const deleteUser = async(req,res)=>{
    try{
       await deleteUserDb(req.params.id)
    res.status(200).send('Data was deleted successfully ! ') 
    }catch(e){
        res.status(400).send('Invalid User !')
    }
    
}
    const updateUser=async(req,res)=>{
       try{

       
        let {username,password,userProfile,userRole,bio,userAge,gender}=req.body
        console.log(req.body);

        let user =await selectUserDb(req.params.id)
        username ? username=username: username = user.username
        password? password=password: password = user.password
        userAge ? userAge=userAge: userAge = user.userAge
        gender ? gender=gender: gender = user.gender
        bio ? bio=bio: bio = user.bio
        userRole ? userRole=userRole: userRole = user.userRole
        userProfile ?   userProfile=  userProfile:   userProfile = user.  userProfile
        res.json({
            results: await updateUserDb(username,password,userProfile,userRole,bio,userAge,gender, req.params.id),
            msg: 'Data was successfully updated ! '
        })}catch(e){
            res.status(500).send('Server error !!')
        }
      
    }
   
 const loginUser =(req,res)=>{
    try{
      res.json({message:"Successfully Logged in!!",token :req.body.token})     
    }catch(e){
        res.send('Register first if you do not have login credentials ! ')
    }
 
    
    
    
}

export{getUsers,selectUser,insertUser,deleteUser,updateUser,loginUser}