import { getNotificationsDb,insertNotificationDb,deleteNotificationDb,updateNotificationDb,selectNotificationDb} from '../model/notificationsDB.js'


const getNotifications =async(req,res)=>{
    try{
    res.json(await getNotificationsDb())    
    }catch(e){
        res.status(500).send('Server error!')
    }
    
}

const selectNotification = async(req,res)=>{
    // console.log(req.params.id);
    try{
     res.json(await selectNotificationDb(req.params.id))     
    }catch(e){
        res.status(400).send('Unable to get message !')
    }
  
    // res.send('Endpoint reached !')
    
}


const insertNotification =async(req,res)=>{
    

    
    let {chatID,senderID,content,mediaUrl,createdAt}= req.body
    
        
                await insertNotificationDb(chatID,senderID,content,mediaUrl,createdAt)
                res.send('Data was inserted successfully !')
           
        
    }

    //     
    
       
    
const deleteNotification = async(req,res)=>{
    try{
       await deleteNotificationDb(req.params.id)
    res.status(200).send('Data was deleted successfully ! ') 
    }catch(e){
        res.status(400).send(' Notification not found   !')
    }
    
}
    const updateNotification=async(req,res)=>{
       try{

       
        let {id_messages,chatsID,content,mediaUrl,createdAt}=req.body
        console.log(req.body);

        let notify =await selectNotificationDb(req.params.id)
        id_messages ?id_messages=id_messages:id_messages=notify.id_messages
        chatsID ? chatsID=chatsID: chatsID = notify.chatsID
        content ?content=content:content=notify.content
        mediaUrl ? mediaUrl=mediaUrl: mediaUrl = notify.mediaUrl
        createdAt ? createdAt=createdAt: createdAt = notify.createdAt
       
        res.json({
            results: await updateMsgDb(id_messages,chatsID,content,mediaUrl,createdAt, req.params.id),
            msg: 'Notification has been successfully updated ! '
        })}catch(e){
            res.status(500).send('Server error !!')
        }
      
    }

    

export{getNotifications,selectNotification,insertNotification,deleteNotification,updateNotification}