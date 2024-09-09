

import express from 'express'
import {getPosts,selectPost,insertPost,deletePost,updatePost} from '../controller/postController.js'
import { verifyAToken } from '../middleware/authenticate.js'

const router = express.Router()
router.get('/',verifyAToken, getPosts)
router.get('/:id',verifyAToken, selectPost)
router.post('/post',verifyAToken, insertPost)
router.delete('/:id',verifyAToken, deletePost)



// router.route('/:id').get(selectUser)

router.patch('/:id',verifyAToken, updatePost)
export default router