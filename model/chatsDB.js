import {pool} from '../config/config.js'

const getChatsDb = async()=>{
    let [data] = await pool.query("SELECT * FROM chats ")
    return data
}

const selectChatDb =  async(chatID)=>{
    let [[data]] = await pool.query('SELECT *FROM chats WHERE chatID= ?',[chatID])
    return data; 
    
    
}
const insertChatDb =async(userID,reciepientID,createdAt)=>{
    let [data] =await pool.query(`
        INSERT INTO chats(userID,reciepientID,createdAt)
        VALUES (?,?,?)
        `,[userID,reciepientID,createdAt])
     return data
    }
    const deleteChatDb=async(userID)=>{
        await pool.query(' DELETE FROM chats WHERE userID = ?',[userID])
               // return data 
           }

    const updateChatDb=async(chatID,reciepientID,createdAt, userID)=>{
        
          await pool.query('UPDATE chats SET userID = ?, reciepeientID = ?, createdAt = ? WHERE chatID = ?', [chatID,userID,reciepientID,createdAt,userID]);

        }; 
    

export {getChatsDb,insertChatDb,deleteChatDb,updateChatDb,selectChatDb}