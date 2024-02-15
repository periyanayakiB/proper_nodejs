import express from 'express';
import bodyParser from 'body-parser';
import { createTask, getTask, updateTask, deleteTask } from './crud.js';

const router = express.Router();
router.use(bodyParser.json());


router.post('/tasks', (req, res) => {
    const { title, completed } = req.body;
    const task = createTask(title, completed);
    res.status(201).json(task);
});


router.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = getTask(id);
    if (!task) {
        res.status(404).send('Task not found');
    } else {
        res.json(task);
    }
});


router.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTask = req.body;
    const task = updateTask(id, updatedTask);
    if (!task) {
        res.status(404).send('Task not found');
    } else {
        res.json(task);
    }
});


router.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const deletedTask = deleteTask(id);
    if (!deletedTask) {
        res.status(404).send('Task not found');
    } else {
        res.json(deletedTask);
    }
});

export default router;
