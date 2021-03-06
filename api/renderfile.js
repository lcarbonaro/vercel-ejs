const ejs = require("ejs");

const { send } = require("micro");

const { join } = require('path');

const handler = (req, res) => {
    let html = ejs.renderFile(join('views','test.ejs'), { testMsg: "Hello World From EJS View!!" }, {}, function(err,html) {
        if(err) {
            send(res, 200, err);
        } else {
            send(res, 200, html);
        }
    });    
};

module.exports = handler;
