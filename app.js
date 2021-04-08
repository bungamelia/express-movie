const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

require("./app/routes/routes.js")(app);

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

module.exports = app;