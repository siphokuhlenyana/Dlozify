import express from 'express'
import {getChats,selectChat,insertChat,deleteChat,updateChat} from '../controller/chatsController.js'

const router = express.Router()
router.get('/',getChats)
router.get('/:id',selectChat)
router.post('/commit',insertChat)
router.delete('/:id',deleteChat)



// router.route('/:id').get(selectUser)

router.patch('/:id',updateChat)
export default router