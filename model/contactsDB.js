import {pool} from '../config/config.js'

const getContactsDb = async()=>{
    let [data] = await pool.query("SELECT * FROM contacts ")
    return data
}

const selectContactDb =  async(id)=>{
    let [[data]] = await pool.query('SELECT *FROM contacts WHERE id= ?',[id])
    return data; 
    
    
}
const insertContactDb =async(userID,createdAt)=>{
    let [data] =await pool.query(`
        INSERT INTO contacts(userID,createdAt)
        VALUES (?,?)
        `,[userID,createdAt])
     return data
    }
    const deleteContactDb=async(userID)=>{
        await pool.query(' DELETE FROM contacts WHERE userID = ?',[userID])
               // return data 
           }

    const updateContactDb=async(id,userID,createdAt)=>{
        
          await pool.query('UPDATE contacts SET id = ?, userID= ?, createdAt = ? WHERE id= ?', [id,userID,createdAt]);

        }; 
    

export {getContactsDb,insertContactDb,deleteContactDb,updateContactDb,selectContactDb}