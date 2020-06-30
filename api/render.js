const ejs = require("ejs");

const { send } = require("micro");

/*
This works fine
*/

const handler = (req, res) => {
    let html = ejs.render('<h1><%= testMsg %></h1>', { testMsg: "Hello World From EJS View!!" });    
    send(res, 200, html);
};

module.exports = handler;
