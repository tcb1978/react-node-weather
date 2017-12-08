<<<<<<< HEAD
require('dotenv').config();
=======
>>>>>>> 82454395c0b45fd6fddb94d5806617ff02f344a9
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());
app.use(cors());

//end point
<<<<<<< HEAD
// app.get('/api/test/:lat/:lon', controller.test);
app.get('/api/test/:city', controller.latitudeLongitude);
// app.get('/api/test/:zip', controller.test);



const PORT = 3003;
=======
app.get('/api/test', controller.test);
// app.get('/api/test', (req, res) => {
//     res.status(200).send('http://i63.tinypic.com/2j9y8p.png');
// })

const PORT = 3535;
>>>>>>> 82454395c0b45fd6fddb94d5806617ff02f344a9

app.listen(PORT, () => {
    console.log(`We are listening on port ${PORT}`);
})

