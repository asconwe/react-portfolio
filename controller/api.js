const fs = require('fs');

module.exports = function(app) {
    app.get('/api/projects', (req, res) => {
        fs.readFile(__dirname + "/data/projects.JSON", (err, data) => {
            if (err) console.log(err);
            const projects = JSON.parse(data);
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
            console.log(portfolioProjects);
            res.json(portfolioProjects);
        });
    });
};