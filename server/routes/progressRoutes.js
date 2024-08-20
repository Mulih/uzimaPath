import express from 'express';
import { createProgress, getProgress, updateProgress, deleteProgress } from '../controllers/progressController.js';

const router = express.Router();

router.post('/', createProgress);
router.get('/:id', getProgress);
router.put('/:id', updateProgress);
router.post('/:id', deleteProgress);

export default router;