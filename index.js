const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const apiPort = 3000;
const routes = require('./routes/routes');
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());
app.use('/api',routes);

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

app.listen(apiPort, ()=>console.log('Server running on port: ', apiPort));