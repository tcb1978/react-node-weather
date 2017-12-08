const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());
app.use(cors());

//end point
app.get('/api/test', controller.test);
// app.get('/api/test', (req, res) => {
//     res.status(200).send('http://i63.tinypic.com/2j9y8p.png');
// })

const PORT = 3535;

app.listen(PORT, () => {
    console.log(`We are listening on port ${PORT}`);
})

