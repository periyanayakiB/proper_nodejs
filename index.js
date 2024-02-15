import express from 'express';
import bodyParser from 'body-parser';
import crudRouter from './crud.js';

const app = express();
const PORT = 3000; 

app.use(bodyParser.json());
app.use(crudRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
