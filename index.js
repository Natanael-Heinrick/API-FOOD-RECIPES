const express = require('express');
const app = express();
const port = 3000;


const connection = require('./db/connection');


app.get('/', (req,res) => {
    res.send('Hello World!');
})

connection.sync().then(() => {
    app.listen(port, () =>{
        console.log('Server is running');
    })
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});