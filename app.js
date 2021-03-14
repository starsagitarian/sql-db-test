const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send(`<h1>We are live</h1>`);
})

PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})