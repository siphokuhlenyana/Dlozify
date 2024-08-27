
import { getRequestDb,insertRequestDb,deleteRequestDb,updateRequestDb,selectRequestDb} from '../model/requestDB.js'


const getRequests =async(req,res)=>{
    try{
    res.json(await getRequestDb())    
    }catch(e){
        res.status(500).send('Server error!')
    }
    
}

const selectRequest = async(req,res)=>{
    // console.log(req.params.id);
    try{
     res.json(await selectRequestDb(req.params.id))     
    }catch(e){
        res.status(400).send('There is no request  !')
    }
  
    // res.send('Endpoint reached !')
    
}


const insertRequest =async(req,res)=>{
    

    
    let {status}= req.body
    
        
                await insertRequestDb(status)
                res.send('Status was inserted successfully !')
           
        
    }

    //     
    
       
    
const deleteRequest = async(req,res)=>{
    try{
       await deleteRequestDb(req.params.id)
    res.status(200).send('Request was deleted successfully ! ') 
    }catch(e){
        res.status(400).send(' Request not found   !')
    }
    
}
    const updateRequest=async(req,res)=>{
       try{

       
        let {status}=req.body
        console.log(req.body);

        let reQ =await selectRequestDb(req.params.id)
        status ? status= status: status=reQ. status
       
        res.json({
            results: await updateRequestDb(status, req.params.id),
            msg: 'Request was successfully updated ! '
        })}catch(e){
            res.status(500).send('Server error !!')
        }
      
    }

    

export{getRequests,selectRequest,insertRequest,deleteRequest,updateRequest}