const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller');
const kelvinToFarenheit = require('kelvin-to-fahrenheit');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/city', controller.onCitySearch);
app.get('/api/zip/:zip', controller.onZipSearch);
app.delete('/api/city', controller.onDeleteCity);



const PORT = 3003;

app.listen(PORT, () => {
    console.log(`We are listening on port ${PORT}`);
})
