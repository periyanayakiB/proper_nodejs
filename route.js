import express from 'express';
import * as controller from './controller.js';

const router = express.Router();

router.post('/tasks', controller.createTask);
router.get('/tasks/:id', controller.getTaskById);
router.put('/tasks/:id', controller.updateTaskById);
router.delete('/tasks/:id', controller.deleteTaskById);

export default router;
