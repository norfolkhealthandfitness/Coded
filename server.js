// server.js
const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/blogs', async (req, res) => {
    const response = await fetch(`https://cdn.contentful.com/spaces/2cvz2uqy0q73/environments/master/entries?access_token=${process.env.CONTENTFUL_API_KEY}&content_type=blog&include=1`);
    const data = await response.json();
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
