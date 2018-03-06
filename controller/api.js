const fs = require('fs');
const request = require('request')

module.exports = function(app) {
    app.get('/api/projects', (req, res) => {
        request({
            "method": "GET",
            "uri": "http://api.github.com/users/asconwe/repos?acces_token=" + process.env.GITHUB_TOKEN,
            "headers": {
                "User-Agent": "request"
            },
        }, (error, response, body) => {
            if (error) console.log(error);
            const projects = JSON.parse(body);
            console.log(typeof projects);
            const portfolioProjects = projects.filter((project) => {
                const description = project.description;
                if (!description) {
                    return false
                } else {
                    const length = description.length;
                    return description.charAt(length - 1) === "*"
                }
            });
            res.json(portfolioProjects);
        });
    });
};