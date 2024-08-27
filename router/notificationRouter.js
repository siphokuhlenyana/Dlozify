import express from 'express'
import {getNotifications,selectNotification,insertNotification,deleteNotification,updateNotification} from '../controller/notificationsController.js'

const router = express.Router()
router.get('/',getNotifications)
router.get('/:id',selectNotification)
router.post('/insert',insertNotification)
router.delete('/:id',deleteNotification)



// router.route('/:id').get(selectUser)

router.patch('/:id',updateNotification)
export default router