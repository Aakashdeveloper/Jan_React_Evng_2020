const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

// React build output folder
app.use(express.static(path.join(__dirname, 'build')));

// Send all other requests to the react app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

//Set Port
const port = process.env.PORT || '3046';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`React  Running on localhost:${port}`));