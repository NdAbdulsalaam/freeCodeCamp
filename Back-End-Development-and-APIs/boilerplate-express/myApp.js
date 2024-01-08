let express = require('express');
let app = express();


// 1
const myFunc = (req, res) => {
    res.send("Hello Express");
}
// app.get("/", myFunc)

// 2
const indexpath = __dirname + '/views/index.html'
const index = function(req, res) {
    res.sendFile(indexpath)
}
// app.get('/', index)
// Compress step 2
// 2
app.get('/', (req, res) => res.sendFile(indexpath))

// 3
app.use('/public', express.static('public'))

// 4
app.get('/json', (req, res) => res.json({"message": "Hello json"}))




















 module.exports = app;
