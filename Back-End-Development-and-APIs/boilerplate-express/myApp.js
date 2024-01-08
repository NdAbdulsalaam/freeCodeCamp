let express = require('express');
let app = express();

console.log("Hellow World")

const myFunc = (req, res) => {
    res.send("Hello Express");
}

const index = function(req, res) {
    res.send("Comming")
}

app.get("/", myFunc)
// app.get('/', index)
































 module.exports = app;
