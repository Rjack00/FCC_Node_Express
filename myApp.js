//These first 2 lines create an Express app object named app
const express = require('express');
const app = express();

const path = require('path');//Node.js module to handle file paths safely across operating systems
require('dotenv').config();//Loads variables from .env file. dotenv was installed and located in package.json
const bodyParser = require('body-parser');

// Note: Express evaluates functions in the order they appear in the code. 

// The following is a "Middleware" function (it includes "next" function)
// This example executes for every request below it.
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);

    next();
});

console.log("Hello World: ", __dirname); //Testing app (only shows in vscode terminal not browser console).

//\\\\\\\\\\\\\\\
//This object (Node express app object) has several methods. Here are some examples:

//\\\\\\\\\\\\\\\
//app.get retrieves data. In this case the index.html file located in the views folder.
// app.get('/', (req,res) => {
//     //res.send("Hello Express"); //prints "Hello Express" on the browser window.
//     const absolutePath = __dirname + '/views/index.html';//__dirname is the Node global variable that gives the current full file path.

//     res.sendFile(absolutePath);//response results in file.
// });

//\\\\\\\\\\\\\\\\
//app.use results in using the style.css file located in /public for this express app
app.use('/public', express.static(path.join(__dirname + '/public')));//path.join handles path separators (/ or \) correctly for your operating system.

//\\\\\\\\\\\\\\\\\\
//resulted in web page displaying myObj as json when url changed to http://localhost:3000/json
// app.get('/json', (req, res) => {
//     let myObj = {"message": "Hello json"};
//     //process.env.MESSAGE_STYLE variable accessible through require('dotenv').config()
//     if (process.env.MESSAGE_STYLE === 'uppercase') {
//        myObj.message = myObj.message.toUpperCase();
//     }

//     res.json(myObj);
// });

//\\\\\\\\\\\\\\\\\\\\\
//Middleware chained to a specific route: app.get('/now, ...)
// app.get('/now', (req, res, next) => {
//         req.time = new Date().toString();
//         next();
//     },
//     (req, res) => {
//         res.send({time: req.time});
//     });

//\\\\\\\\\\\\\\\\\
//Get Route Parameter Input from the Client
// app.get('/:word/echo', (req, res, next) => {
//         req.word = req.params.word;
//         next();
//     },
//     (req, res) => {
//         res.send({echo: req.word});
        
//     }
// );

//\\\\\\\\\\\\\\\\\
//Get Query Parameter Input from the Client - Define a GET route for the '/name' endpoint
app.get('/name', (req, res) => {
    // Destructure 'first' and 'last' properties from req.query, which contains query parameters from the URL (e.g., ?first=John&last=Doe)
    const {first, last} = req.query;

    // Send a JSON response with a 'name' key, combining 'first' and 'last' with a space (e.g., { name: "John Doe" })
    res.json({name: `${first} ${last}`});

    });

//\\\\\\\\\\\\\\\\
//Using body-parser (installed, see package.json) and imported at the top of this page
//Mount body-parser middleware to parse URL-encoded data with the querystring library
app.use(bodyParser.urlencoded({extended: false}));

//Note: In the following exercise you are going to receive data from a POST request, 
// at the same /name route path. If you want, you can use the method 
//              app.route(path).get(handler).post(handler). 
// This syntax allows you to 
// chain different verb handlers on the same path route. You can save a bit of 
// typing, and have cleaner code.































 module.exports = app;
