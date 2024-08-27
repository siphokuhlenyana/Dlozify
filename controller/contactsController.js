import { getContactsDb,insertContactDb,deleteContactDb,updateContactDb,selectContactDb} from '../model/contactsDB.js'


const getContacts =async(req,res)=>{
    try{
    res.json(await getContactsDb())    
    }catch(e){
        res.status(500).send('Server error!')
    }
    
}

const selectContact = async(req,res)=>{
    // console.log(req.params.id);
    try{
     res.json(await selectContactDb(req.params.id))     
    }catch(e){
        res.status(400).send('Unable to get user !')
    }
  
    // res.send('Endpoint reached !')
    
}


const insertContact =async(req,res)=>{
    

    
    let {userID,createdAt}= req.body
    
        
                await insertContactDb(userID,createdAt)
                res.send('Data was inserted successfully !')
           
        
    }

    //     
    
       
    
const deleteContact = async(req,res)=>{
    try{
       await deleteContactDb(req.params.id)
    res.status(200).send('Data was deleted successfully ! ') 
    }catch(e){
        res.status(400).send('Invalid User !')
    }
    
}
    const updateContact=async(req,res)=>{
       try{

       
        let {userID,createdAt}=req.body
        console.log(req.body);

        let chat =await selectChatDb(req.params.id)
        userID ? userID=userID: userID = chat.userID
        createdAt ? createdAt=createdAt: createdAt = chat.createdAt
       
        res.json({
            results: await updateContactDb(userID,createdAt, req.params.id),
            msg: 'Data was successfully updated ! '
        })}catch(e){
            res.status(500).send('Server error !!')
        }
      
    }

    

export{getContacts,selectContact,insertContact,deleteContact,updateContact}