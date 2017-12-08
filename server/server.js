const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());
app.use(cors());

//end point
// app.get('/api/test/:lat/:lon', controller.test);
app.get('/api/test/:city', controller.latitudeLongitude);
// app.get('/api/test/:zip', controller.test);



const PORT = 3003;

app.listen(PORT, () => {
    console.log(`We are listening on port ${PORT}`);
})
