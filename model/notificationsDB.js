import {pool} from '../config/config.js'

const getNotificationsDb = async()=>{
    let [data] = await pool.query("SELECT * FROM notifications ")
    return data
}

const selectNotificationDb =  async(senderID)=>{
    let [[data]] = await pool.query('SELECT *FROM notifications WHERE senderID= ?',[senderID])
    return data; 
    
    
}
const insertNotificationDb =async(id_messages,chatsID,senderID,content,mediaUrl,createdAt)=>{
    let [data] =await pool.query(`
        INSERT INTO messages(id_messages,chatsID,senderID,content,mediaUrl,createdAt)
        VALUES (?,?,?,?,?,?)
        `,[id_messages,chatsID,senderID,content,mediaUrl,createdAt])
     return data
    }
    const deleteNotificationDb=async(senderID)=>{
        await pool.query(' DELETE FROM notifications WHERE senderID = ?',[senderID])
               // return data 
           }

    const updateNotificationDb=async(id_messages,chatsID,content,mediaUrl,createdAt)=>{
        
          await pool.query('UPDATE media SET id_messages=?, chatsID=?, content= ?, mediaUrl= ?, createdAt = ? WHERE senderID= ?', [id_messages,chatsID,content,mediaUrl,createdAt]);

        }; 
    

export {getNotificationsDb,insertNotificationDb,deleteNotificationDb,updateNotificationDb,selectNotificationDb}