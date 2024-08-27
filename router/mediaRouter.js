import express from 'express'
import {getMedia,selectMedia,insertMedia,deleteMedia,updateMedia} from '../controller/mediacontroller.js'

const router = express.Router()
router.get('/',getMedia)
router.get('/:id',selectMedia)
router.post('/insert',insertMedia)
router.delete('/:id',deleteMedia)



// router.route('/:id').get(selectUser)

router.patch('/:id',updateMedia)
export default router