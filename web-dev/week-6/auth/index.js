const express = require('express');
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');
const JWT_SECRET = "USER_APP";



const users = [];

// function generateToken() {
//     let options = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token;
// }

app.post("/signup", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    if (username.length < 5) {
        res.json({
            message: "Username must be at least 5 characters"
        });
        return;
    }

    users.push({ username, password });
    res.json({
        message: "You have signed up successfully"
    });
});

console.log(users);


app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET);

        user.token = token;
        res.send({
            token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});


app.get("/me", (req, res) => {
    const token = req.headers.authorization;
    const userDetails = jwt.verify(token, JWT_SECRET);

    const username =  userDetails.username;
    const user = users.find(user => user.username === username);

    if (user) {
        res.send({
            username: user.username
        })
    } else {
        res.status(401).send({
            message: "Unauthorized"
        })
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});