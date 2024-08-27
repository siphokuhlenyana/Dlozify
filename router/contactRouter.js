import express from 'express'
import {getContacts,selectContact,insertContact,deleteContact,updateContact} from '../controller/contactsController.js'

const router = express.Router()
router.get('/',getContacts)
router.get('/:id',selectContact)
router.post('/insert',insertContact)
router.delete('/:id',deleteContact)



// router.route('/:id').get(selectUser)

router.patch('/:id',updateContact)
export default router