import { getChatsDb,insertChatDb,deleteChatDb,updateChatDb,selectChatDb} from '../model/chatsDB.js'


const getChats =async(req,res)=>{
    try{
    res.json(await getChatsDb())    
    }catch(e){
        res.status(500).send('Server error!')
    }
    
}

const selectChat = async(req,res)=>{
    // console.log(req.params.id);
    try{
     res.json(await selectChatDb(req.params.id))     
    }catch(e){
        res.status(400).send('Unable to get user !')
    }
  
    // res.send('Endpoint reached !')
    
}


const insertChat =async(req,res)=>{
    

    
    let {userID,reciepientID,createdAt}= req.body
    
        
                await insertChatDb(userID,reciepientID,createdAt)
                res.send('Data was inserted successfully !')
           
        
    }

    //     
    
       
    
const deleteChat = async(req,res)=>{
    try{
       await deleteChatDb(req.params.id)
    res.status(200).send('Data was deleted successfully ! ') 
    }catch(e){
        res.status(400).send('Invalid User !')
    }
    
}
    const updateChat=async(req,res)=>{
       try{

       
        let {userID,reciepientID,createdAt}=req.body
        console.log(req.body);

        let chat =await selectChatDb(req.params.id)
        userID ? userID=userID: userID = chat.userID
        reciepientID? reciepientID=reciepientID: reciepientID = chat.reciepientID
        createdAt ? createdAt=createdAt: createdAt = chat.createdAt
       
        res.json({
            results: await updateChatDb(userID,reciepientID,createdAt, req.params.id),
            msg: 'Data was successfully updated ! '
        })}catch(e){
            res.status(500).send('Server error !!')
        }
      
    }

    

export{getChats,selectChat,insertChat,deleteChat,updateChat}