let tasks = [];
let taskId = 1;

export const createTask = (req, res) => {
    const { title, completed } = req.body;
    try {
        const task = { id: taskId++, title, completed };
        tasks.push(task);
        res.status(201).json(task);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).send('Failed to create task');
    }
}

export const getTaskById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const task = tasks.find(task => task.id === id);
        if (!task) {
            res.status(404).send('Task not found');
        } else {
            res.json(task);
        }
    } catch (error) {
        console.error('Error getting task by ID:', error);
        res.status(500).send('Internal Server Error');
    }
}

export const updateTaskById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedTask = req.body;
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            tasks[index] = { ...tasks[index], ...updatedTask };
            res.json(tasks[index]);
        } else {
            res.status(404).send('Task not found');
        }
    } catch (error) {
        console.error('Error updating task by ID:', error);
        res.status(500).send('Internal Server Error');
    }
}

export const deleteTaskById = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            const deletedTask = tasks.splice(index, 1);
            res.json(deletedTask[0]);
        } else {
            res.status(404).send('Task not found');
        }
    } catch (error) {
        console.error('Error deleting task by ID:', error);
        res.status(500).send('Internal Server Error');
    }
}
