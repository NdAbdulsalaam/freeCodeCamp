require('dotenv').config()
let bodyParser = require('body-parser')

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
// the path, first argument '/public' is optional
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
// app.get('/json', envpath)

// 7
const simpleLogger = function (req, res, next) {
    console.log(req.method, req.path, "-", req.ip);
    next();
}
app.use('/json', simpleLogger)

// 8
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
    }, (req, res) => {
        res.json({"time": req.time});
    }
    )

// 9
app.use('/:word/echo', (req, res) => {
    const word = req.params.word;
    res.json({echo: word})
})
// route_path: '/user/:userId/book/:bookId'
// actual_request_URL: '/user/546/book/6754'
// req.params: {userId: '546', bookId: '6754'}

// route_path: '/library'
// actual_request_URL: '/library?userId=546&bookId=6754'
// req.query: {userId: '546', bookId: '6754'}
// 10
// app.route('/name')
//     .get((req, res) => {
//     const fname = req.query.firstname;
        // const lname = req.query.lastname;
// })
//     .post((req, res) {
//     const query = req.query.;
// })
app.route('/name')
    .get((req, res) => {
        const firstname = req.query.first || 'Nurudeen';
        const lastname = req.query.last || 'Abdulsalaam';
        res.json({'name': `${firstname} ${lastname}`})
    })
    .post((req, res) => {
        const firstname = req.body.first || 'Nurudeen';
        const lastname = req.body.last || 'ABdulsalaam';
        res.json({'name': `${firstname} ${lastname}`})
    })















 module.exports = app;
