import {pool} from '../config/config.js'

const getPostsDb = async()=>{
    let [data] = await pool.query("SELECT * FROM posts ")
    return data
}

const selectPostDb =  async(idpost)=>{
    let [[data]] = await pool.query('SELECT *FROM posts WHERE idpost= ?',[idpost])
    return data; 
    
    
}
const insertPostDb =async(description,userProfile)=>{
    let [data] =await pool.query(`
        INSERT INTO posts(description,userProfile)
        VALUES (?,?)
        `,[description,userProfile])
     return data
    }
    const deletePostDb=async(idpost)=>{
        await pool.query(' DELETE FROM posts WHERE idpost = ?',[idpost])
               // return data 
           }

    const updatePostDb=async(description,userProfile)=>{
        
          await pool.query('UPDATE posts SET description = ?, userProfile = ? WHERE idpost= ?', [description,userProfile]);

        }; 
    

export {getPostsDb,selectPostDb,insertPostDb,deletePostDb,updatePostDb}