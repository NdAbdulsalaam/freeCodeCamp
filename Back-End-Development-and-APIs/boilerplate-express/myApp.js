let express = require('express');
let app = express();


// 1
const myFunc = (req, res) => {
    res.send("Hello Express");
}
// app.get("/", myFunc)

// 2
const indexpath = . + 'views/index.html'
const index = function(req, res) {
    res.send(indexpath)
}
app.get('/', index)




















 module.exports = app;
