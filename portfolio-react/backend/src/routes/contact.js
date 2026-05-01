import express from 'express';
import { sendMessage, getMessages } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', sendMessage);   // Save + notify
router.get('/',  getMessages);   // Read all

export default router;
