import express from 'express';
import route from './route.js';

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Mount the router
app.use(route);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
