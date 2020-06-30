const ejs = require("ejs");

const { send } = require("micro");


/*
This gives back error object:
{
"errno": -2,
"syscall": "open",
"code": "ENOENT",
"path": "./views/test"
}
Have tried moving the views folder out of the api folder - same error
*/
const handler = (req, res) => {
    let html = ejs.renderFile('./views/test', { testMsg: "Hello World From EJS View!!" }, {}, function(err,html) {
        if(err) {
            send(res, 200, err);
        } else {
            send(res, 200, html);
        }
    });    
};

module.exports = handler;
