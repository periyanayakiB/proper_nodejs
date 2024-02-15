import express from 'express';
import routes from './routes.js';

const app = express();
const PORT = 2000;
app.use(express.json());

app.use(routes);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
