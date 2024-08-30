import {pool} from '../config/config.js'

const getPostsDb = async()=>{
    let [data] = await pool.query("SELECT * FROM posts LIMIT 7")
    return data
}

const selectPostDb =  async(idpost)=>{
    let [[data]] = await pool.query('SELECT *FROM posts WHERE idpost= ?',[idpost])
    return data; 
    
    
}
const insertPostDb =async(description,url)=>{
    let [data] =await pool.query(`
        INSERT INTO posts(description,url)
        VALUES (?,?)
        `,[description,userProfile])
     return data
    }
    const deletePostDb=async(idpost)=>{
        await pool.query(' DELETE FROM posts WHERE idpost = ?',[idpost])
               // return data 
           }

    const updatePostDb=async(description,url)=>{
        
          await pool.query('UPDATE posts SET description = ?, url = ? WHERE idpost= ?', [description,url]);

        }; 
    

export {getPostsDb,selectPostDb,insertPostDb,deletePostDb,updatePostDb}