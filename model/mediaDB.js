import {pool} from '../config/config.js'

const getMediaDb = async()=>{
    let [data] = await pool.query("SELECT * FROM media ")
    return data
}

const selectMediaDb =  async(mediaID)=>{
    let [[data]] = await pool.query('SELECT *FROM media WHERE mediaID= ?',[mediaID])
    return data; 
    
    
}
const insertMediaDb =async(url,type,createdAt)=>{
    let [data] =await pool.query(`
        INSERT INTO contacts(url,type,createdAt)
        VALUES (?,?,?)
        `,[url,type,createdAt])
     return data
    }
    const deleteMediaDb=async(mediaID)=>{
        await pool.query(' DELETE FROM media WHERE mediaID = ?',[mediaID])
               // return data 
           }

    const updateMediaDb=async(url,type,createdAt)=>{
        
          await pool.query('UPDATE media SET url = ?, type= ?, createdAt = ? WHERE mediaID= ?', [url,type,createdAt]);

        }; 
    

export {getMediaDb,insertMediaDb,deleteMediaDb,updateMediaDb,selectMediaDb}