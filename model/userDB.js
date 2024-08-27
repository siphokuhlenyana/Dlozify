import {pool} from '../config/config.js'

const getUsersDb = async()=>{
    let [data] = await pool.query("SELECT * FROM users ")
    return data
}
const selectUsersDb =  async(username)=>{
    let [[data]] = await pool.query('SELECT *FROM users WHERE username= ?',[username])
    return data? data : ''; 
    
    
}
const selectUserDb =  async(userID)=>{
    let [[data]] = await pool.query('SELECT *FROM users WHERE userID= ?',[userID])
    return data; 
    
    
}
const insertUserDb =async(username,password,userProfile,userRole,bio,userAge,gender)=>{
    let [data] =await pool.query(`
        INSERT INTO users(username,password,userProfile,userRole,bio,userAge,gender)
        VALUES (?,?,?,?,?,?,?)
        `,[username,password,userProfile,userRole,bio,userAge,gender])
     return data
    }
    const deleteUserDb=async(userID)=>{
        await pool.query(' DELETE FROM users WHERE userID = ?',[userID])
               // return data 
           }

    const updateUserDb=async(username,password,userProfile,userRole,bio,userAge,gender, userID)=>{
        
          await pool.query('UPDATE users SET username = ?, password = ?, userProfile = ?, userRole= ?, bio = ?  ,userAge = ?,gender=? WHERE userID = ?', [username,password,userProfile,userRole,bio,userAge,gender, userID]);

        }; 
    

export {getUsersDb,selectUsersDb,insertUserDb,deleteUserDb,updateUserDb,selectUserDb}