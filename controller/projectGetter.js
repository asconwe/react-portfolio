const request = require('request');
const fs = require('fs');

module.exports = function(app) {
    app.get('/manager/refresh', (req, res) => {
        request({
            "method": "GET",
            "uri": "http://api.github.com/users/asconwe/repos",
            "headers": {
                "User-Agent": "request"
            }
        }, (err, response, body) => {
            console.log('response', body);
            fs.writeFile(__dirname + '/data/projects.JSON', body, 'utf-8', (writeErr, writeResponse) => {
                if (writeErr) {
                    console.log(writeErr);
                    return res.json({result: writeErr});   
                }
                return res.json({result: writeResponse});
            })
        })
    })
}