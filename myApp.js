//These first 2 lines create an Express app object named app
let express = require('express');
let app = express();

console.log("Hello World"); //Testing app

//This object has several methods. Here are some examples:
app.get('/', (req,res) => {
    //res.send("Hello Express");
    const absolutePath = __dirname + '/views/index.html';//__dirname is the Node global variable
    res.sendFile(absolutePath);
});

































 module.exports = app;
