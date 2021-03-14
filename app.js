require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const db = require('./models')

const app = express();

app.use(logger('dev'));


PORT = process.env.PORT || 3001;

app.listen(PORT, async() => {
    console.log(`The server is active at port http://localhost:${PORT}`);
    try {
        await db.sequelize.sync({force: true});
        console.log('DataBase synced');
    } catch (err) {
        console.log(err);
    }
})
