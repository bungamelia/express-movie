module.exports = app => {
    const movies = require("../controllers/appController.js");
    const path = require('path');

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../views', 'index.html'));
    });

    app.get('/title/:id', function(req, res) {
        res.sendFile(path.join(__dirname, '../views/title', 'index.html'));

    });

    app.get('/api/search/:keyword/:page', movies.search);

    app.get('/api/detail/:movieid', movies.detail);

};