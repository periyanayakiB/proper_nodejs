let tasks = [];
let taskId = 1;

export function createTask(title, completed=false ) {
    try {
        const task = { id: taskId++, title, completed };
        tasks.push(task);
        return task;
    } catch (error) {
        console.error('Error creating task:', error);
        return null; 
    }
}

export function getTask(id) {
    try {
        return tasks.find(task => task.id === id);
    } catch (error) {
        console.error('Error getting task:', error);
        return null; 
    }
}

export function updateTask(id, updatedTask) {
    try {
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            tasks[index] = { ...tasks[index], ...updatedTask };
            return tasks[index];
        }
        return null;
    } catch (error) {
        console.error('Error updating task:', error);
        return null; 
    }
}

export function deleteTask(id) {
    try {
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            const deletedTask = tasks.splice(index, 1);
            return deletedTask[0];
        }
        return null;
    } catch (error) {
        console.error('Error deleting task:', error);
        return null; 
    }
}
