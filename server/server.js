const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller');
const kelvinToFarenheit = require('kelvin-to-fahrenheit');

const app = express();
app.use(bodyParser.json());
app.use(cors());

//end point
// app.get('/api/test/:lat/:lon', controller.latitudeLongitude);
app.post('/api/city', controller.onCitySearch);
app.get('/api/zip/:zip', controller.onZipSearch);



const PORT = 3003;

app.listen(PORT, () => {
    console.log(`We are listening on port ${PORT}`);
})
