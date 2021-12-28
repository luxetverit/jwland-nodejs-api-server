const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('api-server is running....');
});

app.get('/products', (req, res) => {
    res.send('get');
});

app.post('/producsts', (req, res) => {
    res.send('POST');
});

app.listen(port, () => {
    console.log('api server is running');
});
