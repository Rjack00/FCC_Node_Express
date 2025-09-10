//These first 2 lines create an Express app object named app
let express = require('express');
let app = express();

let path = require('path');//Node.js module to handle file paths safely across operating systems
require('dotenv').config();//Loads variables from .env file. dotenv was installed and located in package.json

// Note: Express evaluates functions in the order they appear in the code. 

// The following is a "Middleware" function (it includes "next" function)
// This example executes for every request below it.
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);

    next();
});

console.log("Hello World"); //Testing app (only shows in vscode terminal not browser console).

//\\\\\\\\\\\\\\\
//  This object (Node express app object) has several methods. Here are some examples:

//\\\\\\\\\\\\\\\
//  app.get retrieves data. In this case index.html to be used for this express app.

// app.get('/', (req,res) => {
//     //res.send("Hello Express"); //prints "Hello Express" on the browser window.
//     const absolutePath = __dirname + '/views/index.html';//__dirname is the Node global variable

//     res.sendFile(absolutePath);//response results in file.
// });

//\\\\\\\\\\\\\\\\
//  app.use results in using the style.css file located in /public for this express app
app.use('/public', express.static(path.join(__dirname + '/public')));//path.join handles path separators (/ or \) correctly for your operating system.

//\\\\\\\\\\\\\\\\\\
//  resulted in web page displaying myObj as json when url changed to http://localhost:3000/json
// app.get('/json', (req, res) => {
//     let myObj = {"message": "Hello json"};
//     //process.env.MESSAGE_STYLE variable accessible through require('dotenv').config()
//     if (process.env.MESSAGE_STYLE === 'uppercase') {
//        myObj.message = myObj.message.toUpperCase();
//     }

//     res.json(myObj);
// });

//\\\\\\\\\\\\\\\\\\\\\
// Middleware chained to a specific route: app.get('/now, ...)

// app.get('/now', (req, res, next) => {
//         req.time = new Date().toString();
//         next();
//     },
//     (req, res) => {
//         res.send({time: req.time});
//     });

//\\\\\\\\\\\\\\\\\
// Get Route Parameter Input from the Client
app.get('/:word/echo', (req, res, next) => {
        req.word = req.params.word;
        next();
    },
    (req, res) => {
        res.send({echo: req.word});
        
    }
);






























 module.exports = app;
