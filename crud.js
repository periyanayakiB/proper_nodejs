import express from 'express';

const router = express.Router();

let tasks = [];
let taskId = 1;

router.post('/tasks', (req, res) => {
    const { title, completed } = req.body;
    try {
        const task = { id: taskId++, title, completed };
        tasks.push(task);
        res.status(201).json(task);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).send('Failed to create task');
    }
});

router.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(task => task.id === id);
    if (!task) {
        res.status(404).send('Task not found');
    } else {
        res.json(task);
    }
});

router.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTask = req.body;
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...updatedTask };
        res.json(tasks[index]);
    } else {
        res.status(404).send('Task not found');
    }
});

router.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1);
        res.json(deletedTask[0]);
    } else {
        res.status(404).send('Task not found');
    }
});

export default router;
