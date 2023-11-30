require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connect = require('./db/config').connect;

app.use(express.json());

app.get('/test', (req,res)=> {
    res.status(200).send("Test success");
});

async function startServer() {
    await connect();

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

startServer();

