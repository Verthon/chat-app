//require express for working as a server
const express = require('express');

//require socket.io to work with sockets
const socket = require('socket.io');

//create express app
let app = express();
//server is stored in 'server' variable
let server = app.listen(3000, () =>{
  console.log('listening to events on 3000 port');
});

//static files
app.use(express.static('public'));

//socket setup
//invoke socket function and passing server
let io = socket(server);

/* when the connection is detected
  - fire function that take socket information as parameter
*/
io.on('connection', (socket) =>{
  console.log('made a connection', socket.id);
});
