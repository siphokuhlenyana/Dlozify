import express from 'express'
import {getMsg,selectMsg,insertMsg,deleteMsg,updateMsg} from '../controller/msgController.js'

const router = express.Router()
router.get('/',getMsg)
router.get('/:id',selectMsg)
router.post('/insert',insertMsg)
router.delete('/:id',deleteMsg)



// router.route('/:id').get(selectUser)

router.patch('/:id',updateMsg)
export default router