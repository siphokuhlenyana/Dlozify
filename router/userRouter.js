import express from 'express'
import {getUsers,selectUser,insertUser,deleteUser,loginUser,updateUser,getLimit} from '../controller/userController.js'
import { checkUser, verifyAToken } from '../middleware/authenticate.js'
const router = express.Router()
router.get('/',verifyAToken, getUsers)
router.get('/limit',getLimit)
router.get('/:id',selectUser)
router.post('/register',insertUser)
router.delete('/:id',deleteUser)
router.post('/login',checkUser,loginUser)


// router.route('/:id').get(selectUser)

router.patch('/:id',updateUser)




export default router