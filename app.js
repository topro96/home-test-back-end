const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// require db connection
require('./models');

app.use(express.static('public'))
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})
