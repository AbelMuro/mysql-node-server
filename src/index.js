const express = require('express');
const cors = require('cors');
const createUser = require('./Routes/POST/createUser');
const app = express();
const port = 4000;


app.use(express.json());
app.use(cors({
    origin: '*',
    allowedHeaders: ['Content-Type'],
    methods: ['GET', 'POST']
}));

app.use(createUser);

app.use('/', (req, res) => {
    res.send('Hello World')
});

app.listen(port, (error) => {
    if(error){
        console.log(error, 'Error occured');
        return;
    }
    console.log(`Server is running on port ${port}`);
})

module.exports = app;