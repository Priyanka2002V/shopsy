const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Using EJS templating engine

// Define routes
app.get('/', (req, res) => {
    res.render('index', { page: 'home' });
});

app.get('/about', (req, res) => {
    res.render('index', { page: 'about' });
});

app.get('/help', (req, res) => {
    res.render('index', { page: 'help' });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
