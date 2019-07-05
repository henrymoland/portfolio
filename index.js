const express = require('express');
const nodemailer = require("nodemailer");
const path = require('path');

const server = express();
server.use(express.json());


// Serve static assets in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    server.use(express.static('client/build'));
    server.get('*', (req, res) => {
        res.sendFile(path.join(_dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 4000;

server.listen(PORT);