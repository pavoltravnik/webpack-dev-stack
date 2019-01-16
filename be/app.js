const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3000;


app.get('/', (req, res) => res.send(
    [{
        title: 'Macha Latte',
        price: 65.50,
        id: 1,
        text: 'Sample text'
    },
    {
        title: 'Espresso',
        price: 40.30,
        id: 2,
        text: 'Sample text',
    },
    {
        title: 'Dupio',
        price: 48.70,
        id: 3,
        text: 'Sample text',
    }]
))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
