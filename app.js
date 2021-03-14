require('dotenv').config();
const express = require('express');
const logger = require('morgan');


const app = express();

app.use(logger('dev'));


PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})