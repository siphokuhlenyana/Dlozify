import { getPostsDb,selectPostDb,insertPostDb,deletePostDb,updatePostDb} from '../model/postsDB.js'


const getPosts =async(req,res)=>{
    try{
    res.json(await getPostsDb())    
    }catch(e){
        res.status(500).send('Server error!')
    }
    
}

const selectPost = async(req,res)=>{
    // console.log(req.params.id);
    try{
     res.json(await selectPostDb(req.params.id))     
    }catch(e){
        res.status(400).send('Unable to get the post you are looking for !')
    }
  
    // res.send('Endpoint reached !')
    
}


const insertPost =async(req,res)=>{
    

    
    let {description,url}= req.body
    
        
                await insertPostDb(description,url)
                res.send('Post was inserted successfully !')
           
        
    }

    //     
    
       
    
const deletePost = async(req,res)=>{
    try{
       await deletePostDb(req.params.id)
    res.status(200).send('Post was deleted successfully ! ') 
    }catch(e){
        res.status(400).send(' Post not found   !')
    }
    
}
    const updatePost=async(req,res)=>{
       try{

       
        let {description,url}=req.body
        console.log(req.body);

        let post =await selectPostDb(req.params.id)
     
        description ? description=description: description = post.description
      url ?url=url:url=post.url
       
        res.json({
            results: await updatePostDb(description,url, req.params.id),
            msg: 'Post has been successfully updated ! '
        })}catch(e){
            res.status(500).send('Server error !!')
        }   
    }

    

export{getPosts,selectPost,insertPost,deletePost,updatePost}