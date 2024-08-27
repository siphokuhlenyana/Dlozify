

import express from 'express'
import {getRequests,selectRequest,insertRequest,deleteRequest,updateRequest} from '../controller/requestController.js'

const router = express.Router()
router.get('/',getRequests)
router.get('/:id',selectRequest)
router.post('/follow',insertRequest)
router.delete('/:id',deleteRequest)



// router.route('/:id').get(selectUser)

router.patch('/:id',updateRequest)
export default router