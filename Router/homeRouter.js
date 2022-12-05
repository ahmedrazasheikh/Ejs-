import express from 'express';
const router = express.Router()
import {checkingPurpose,inFo} from '../Controller/homeController.js'
router.get('/', checkingPurpose  )
export default router;