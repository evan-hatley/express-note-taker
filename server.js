// Create routes and dependencies
const express = require('express');
const apiRoute = require('./routes/api-route');
const htmlRoute = require('./routes/html-route');
const PORT = process.env.PORT || 3001;
const app = express();

// Create the middleware with Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(apiRoute);
app.use(htmlRoute);

app.listen(PORT);
