import {getCommentsDb,insertCommentDb,deleteCommentDb,updateCommentDb,selectCommentDb} from '../model/commentsDB.js'


const getComments =async(req,res)=>{
    try{
    res.json(await getCommentsDb())    
    }catch(e){
        res.status(500).send('Server error!')
    }
    
}

const selectComment = async(req,res)=>{
    // console.log(req.params.id);
    try{
     res.json(await selectCommentDb(req.params.id))     
    }catch(e){
        res.status(400).send('Unable to get comment !')
    }
  
    // res.send('Endpoint reached !')
    
}


const insertComment =async(req,res)=>{
    

    
    let {idpost,content}= req.body
    
        
                await insertCommentDb(idpost,content)
                res.send('Comment was inserted successfully !')
           
        
    }

    //     
    
       
    
const deleteComment = async(req,res)=>{
    try{
       await deleteCommentDb(req.params.id)
    res.status(200).send('Data was deleted successfully ! ') 
    }catch(e){
        res.status(400).send('Invalid comment !')
    }
    
}
    const updateComment=async(req,res)=>{
       try{

       
        let {content}=req.body
        console.log(req.body);

        let comment =await selectCommentDb(req.params.id)
        content ? content=content: content = comment.content
       
        res.json({
            results: await updateChatDb(content, req.params.id),
            msg: 'Data was successfully updated ! '
        })}catch(e){
            res.status(500).send('Server error !!')
        }
      
    }

    

export{getComments,selectComment,insertComment,deleteComment,updateComment}