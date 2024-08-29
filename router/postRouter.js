

import express from 'express'
import {getPosts,selectPost,insertPost,deletePost,updatePost} from '../controller/postController.js'

const router = express.Router()
router.get('/',getPosts)
router.get('/:id',selectPost)
router.post('/post',insertPost)
router.delete('/:id',deletePost)



// router.route('/:id').get(selectUser)

router.patch('/:id',updatePost)
export default router