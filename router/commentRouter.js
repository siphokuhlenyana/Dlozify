import express from 'express'
import {getComments,selectComment,insertComment,deleteComment,updateComment} from '../controller/commentsController.js'

const router = express.Router()
router.get('/',getComments)
router.get('/:id',selectComment)
router.post('/comment',insertComment)
router.delete('/:id',deleteComment)



// router.route('/:id').get(selectUser)

router.patch('/:id',updateComment)
export default router