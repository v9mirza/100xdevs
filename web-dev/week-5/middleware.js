const express = require('express');
const app = express();

// Custom logging middleware
const logRequests = (req, res, next) => {
    const method = req.method;         // HTTP method (GET, POST, etc.)
    const url = req.url;               // Requested URL
    const timestamp = new Date().toISOString(); // Timestamp of the request

    console.log(`[${timestamp}] ${method} ${url}`);
    next(); // Pass control to the next middleware or route handler
};

// Apply the middleware globally (for all routes)
app.use(logRequests);

app.get('/', (req, res) => {
    res.send('hello mf!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
