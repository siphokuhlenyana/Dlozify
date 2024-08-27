import { getMediaDb,insertMediaDb,deleteMediaDb,updateMediaDb,selectMediaDb} from '../model/mediaDB.js'


const getMedia =async(req,res)=>{
    try{
    res.json(await getMediaDb())    
    }catch(e){
        res.status(500).send('Server error!')
    }
    
}

const selectMedia = async(req,res)=>{
    // console.log(req.params.id);
    try{
     res.json(await selectMediaDb(req.params.id))     
    }catch(e){
        res.status(400).send('Unable to get media !')
    }
  
    // res.send('Endpoint reached !')
    
}


const insertMedia =async(req,res)=>{
    

    
    let {url,type,createdAt}= req.body
    
        
                await insertMediaDb(url,type,createdAt)
                res.send('Data was inserted successfully !')
           
        
    }

    //     
    
       
    
const deleteMedia = async(req,res)=>{
    try{
       await deleteMediaDb(req.params.id)
    res.status(200).send('Data was deleted successfully ! ') 
    }catch(e){
        res.status(400).send('Cannot find media  !')
    }
    
}
    const updateMedia=async(req,res)=>{
       try{

       
        let {url,type,createdAt}=req.body
        console.log(req.body);

        let media =await selectMediaDb(req.params.id)
        type ?type=type:type=media.type
        url ? url=url: url = media.url
        createdAt ? createdAt=createdAt: createdAt = media.createdAt
       
        res.json({
            results: await updateMediaDb(url,type,createdAt, req.params.id),
            msg: 'Data was successfully updated ! '
        })}catch(e){
            res.status(500).send('Server error !!')
        }
      
    }

    

export{getMedia,selectMedia,insertMedia,deleteMedia,updateMedia}