const express = require("express");

const app = express();

// For counting the requests
let reqCount = 0;


app.get("/sum", function (req, res) {

    reqCount = reqCount + 1;
    console.log("Total Request =" + reqCount);
    

// main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    });
});

// Example: http://127.0.0.1:3000/sum?a=2&b=4

app.get("/multiply", function(req, res) {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    res.json({
        ans: a * b
    });
});
// Example: http://127.0.0.1:3000/multiply?a=2&b=4

app.get("/divide", function(req, res) {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    res.json({
        ans: a / b
    });
});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
