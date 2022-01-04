const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const indexRouter = require('./routes/index');
app.use('/api/', indexRouter);

const port = 3000;

io.on('connection', function (socket) {});

server.listen(port, console.log('sucess'));
