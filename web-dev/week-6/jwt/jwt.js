const jwt = require('jsonwebtoken');

const contents = {
    name: "mirza",
    acNumber: "1234567890"
};

const secret = 'mysecretkey';

const newToken = jwt.sign(contents, secret);

console.log("JWT Token:", newToken);
