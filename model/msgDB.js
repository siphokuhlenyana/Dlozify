import {pool} from '../config/config.js'

const getMsgDb = async()=>{
    let [data] = await pool.query("SELECT * FROM messages ")
    return data
}

const selectMsgDb =  async(id_messages)=>{
    let [[data]] = await pool.query('SELECT *FROM messages WHERE id_messages= ?',[id_messages])
    return data; 
    
    
}
const insertMsgDb =async(chatID,senderID,content,mediaUrl,createdAt)=>{
    let [data] =await pool.query(`
        INSERT INTO messages(chatID,senderID,content,mediaUrl,createdAt)
        VALUES (?,?,?,?,?)
        `,[chatID,senderID,content,mediaUrl,createdAt])
     return data
    }
    const deleteMsgDb=async(id_messages)=>{
        await pool.query(' DELETE FROM messages WHERE id_messages = ?',[id_messages])
               // return data 
           }

    const updateMsgDb=async(content,mediaUrl,createdAt)=>{
        
          await pool.query('UPDATE media SET content= ?, mediaUrl= ?, createdAt = ? WHERE id_messages= ?', [content,mediaUrl,createdAt]);

        }; 
    

export {getMsgDb,insertMsgDb,deleteMsgDb,updateMsgDb,selectMsgDb}