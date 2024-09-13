import {pool} from '../config/config.js'

const getRequestDb = async()=>{
    let [data] = await pool.query("SELECT * FROM friend_request ")
    return data
}

const selectRequestDb =  async(id_friend_req)=>{
    let [[data]] = await pool.query('SELECT *FROM friend_request WHERE id_friend_req= ?',[id_friend_req])
    return data; 
    
    
}
const insertRequestDb =async(userID,status)=>{
    let [data] =await pool.query(`
        INSERT INTO friend_request(userID,status)
        VALUES (?,?)
        `,[userID,status])
     return data
    }
    const deleteRequestDb=async(id_friend_req)=>{
        await pool.query(' DELETE FROM friend_request WHERE id_friend_req = ?',[id_friend_req])
               // return data 
           }

    const updateRequestDb=async(status)=>{
        
          await pool.query('UPDATE media SET status= ?WHERE id_friend_req= ?', [status]);

        }; 
    

export {getRequestDb,insertRequestDb,deleteRequestDb,updateRequestDb,selectRequestDb}