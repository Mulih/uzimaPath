import express from 'express';
import { createProgress, getProgressByUserId, updateProgress, deleteProgress } from '../controllers/progressController.js';

const router = express.Router();

router.post('/Progress', createProgress);
router.get('/Progress', getProgressByUserId);
router.put('/Progress/:id', updateProgress);
router.post('/Progress/:id', deleteProgress);

export default router;