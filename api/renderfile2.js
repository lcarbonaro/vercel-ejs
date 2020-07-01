const ejs = require("ejs");

const { send } = require("micro");

const { join } = require('path');

const handler = (req, res) => {
    let html = ejs.renderFile(join('views','test2.ejs'), { testMsg: "Hello World Too From EJS View 2!!" }, {}, function(err,html) {
        if(err) {
            send(res, 200, err);
        } else {
            send(res, 200, html);
        }
    });    
};

module.exports = handler;
