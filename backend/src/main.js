const bodyParser = require('body-parser');
const express = require('express');
//const { request } = require('express')
const cors = require('cors');
const app = express();
const port = 3000;
const routes = require('./routes.js');
const {mainLogger} = require('./logger.js');


app.use(cors('*'));
app.use(bodyParser.json());

app.get('/hello', routes);
app.get('/data', routes);
app.get('/download', routes);
app.post('/rgb-to-hex', routes);
app.post('/hex-to-rgb', routes);
app.post('/rgb-to-cmyk', routes);
app.post('/cmyk-to-rgb', routes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
mainLogger.info('Listening on port 3000');






