const express = require('express');
const path = require('path');
var Request = require("request");

const app = express();
const PORT = process.env.PORT || 5000;

const key = "a0c6cfc008d351d7ef7ae3541f26ebf6"

let latitude = '47.85';
let longitude = '25.57';
let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send("Hello")
})

app.get('/api', (req, res) =>{
    Request.get(api, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        res.json(JSON.parse(body))
    });
})

app.listen(PORT, () =>{
    console.log("Server listening on " + PORT)
})
