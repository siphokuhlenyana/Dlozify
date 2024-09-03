import {pool} from '../config/config.js'

const getCommentsDb = async()=>{
    let [data] = await pool.query("SELECT * FROM comments ")
    return data
}

const selectCommentDb =  async(commentsID)=>{
    let [[data]] = await pool.query('SELECT *FROM comments WHERE commentsID= ?',[commentsID])
    return data; 
    
    
}
const insertCommentDb =async(content)=>{
    let [data] =await pool.query(`
        INSERT INTO comments(content)
        VALUES (?)
        `,[content])
     return data
    }
    const deleteCommentDb=async(commentsID)=>{
        await pool.query(' DELETE FROM comments WHERE commentsID = ?',[commentsID])
               // return data 
           }

    const updateCommentDb=async(content)=>{
        
          await pool.query('UPDATE comments SET content= ? WHERE commentsID = ?', [content]);

        }; 
    

export {getCommentsDb,insertCommentDb,deleteCommentDb,updateCommentDb,selectCommentDb}