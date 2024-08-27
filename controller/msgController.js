import { getMsgDb,insertMsgDb,deleteMsgDb,updateMsgDb,selectMsgDb} from '../model/msgDB.js'


const getMsg =async(req,res)=>{
    try{
    res.json(await getMsgDb())    
    }catch(e){
        res.status(500).send('Server error!')
    }
    
}

const selectMsg = async(req,res)=>{
    // console.log(req.params.id);
    try{
     res.json(await selectMsg(req.params.id))     
    }catch(e){
        res.status(400).send('Unable to get message !')
    }
  
    // res.send('Endpoint reached !')
    
}


const insertMsg =async(req,res)=>{
    

    
    let {chatID,senderID,content,mediaUrl,createdAt}= req.body
    
        
                await insertMsgDb(chatID,senderID,content,mediaUrl,createdAt)
                res.send('Data was inserted successfully !')
           
        
    }

    //     
    
       
    
const deleteMsg = async(req,res)=>{
    try{
       await deleteMsgDb(req.params.id)
    res.status(200).send('Data was deleted successfully ! ') 
    }catch(e){
        res.status(400).send(' Message not found   !')
    }
    
}
    const updateMsg=async(req,res)=>{
       try{

       
        let {content,mediaUrl,createdAt}=req.body
        console.log(req.body);

        let msg =await selectMsgDb(req.params.id)
        content ?content=content:content=msg.content
        mediaUrl ? mediaUrl=mediaUrl: mediaUrl = msg.mediaUrl
        createdAt ? createdAt=createdAt: createdAt = msg.createdAt
       
        res.json({
            results: await updateMsgDb(content,mediaUrl,createdAt, req.params.id),
            msg: 'Data was successfully updated ! '
        })}catch(e){
            res.status(500).send('Server error !!')
        }
      
    }

    

export{getMsg,selectMsg,insertMsg,deleteMsg,updateMsg}