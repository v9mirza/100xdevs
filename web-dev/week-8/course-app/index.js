const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

app.post('/user/signup', (req, res) => {
    res.send('signup endpoint');
});

app.post('/user/login', (req, res) => {
    res.send('login endpoint');
});

app.post('/user/courses', (req, res) => {
    res.send(' all courses endpoint');
});

app.post('/user/courses/:courseId', (req, res) => {
    res.send('purchase course endpoint');
});

app.get('/user/purchasedCourses', (req, res) => {
    res.send('purchased courses endpoint');
});




app.listen(3000, () => {
    console.log('Server started on port 3000');
});