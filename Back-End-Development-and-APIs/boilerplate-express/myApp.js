require('dotenv').config()

let express = require('express');
let app = express();


// 2
const myFunc = (req, res) => {
    res.send("Hello Express");
}
// app.get("/", myFunc)

// 3
const indexpath = __dirname + '/views/index.html'
const index = function(req, res) {
    res.sendFile(indexpath)
}
// app.get('/', index)
// Compress step 3
// 3
app.get('/', (req, res) => res.sendFile(indexpath))

// 4
app.use('/public', express.static('public'))

// 5
// app.get('/json', (req, res) => res.json({"message": "Hello json"}))

// 6
const envpath = function(req, res) {
    const myStyle = process.env.MESSAGE_STYLE
    const myMessage = {"message": "Hello json"}
    myStyle === "uppercase"?
    res.json(myMessage.message.toUpperCase()):
    res.json(myMessage)
}
app.get('/json', envpath)






















 module.exports = app;
