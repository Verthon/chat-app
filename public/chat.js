//Make connection on frontend(client)
//Here we can use io because its loaded by cdn library in index.html
const socket = io.connect('http://localhost:3000');

//const element = document.querySelectorAll('#output', '#name', '#message', '#btn');
const output = document.getElementById('output');
      myName = document.getElementById('name'),
      message = document.getElementById('message'),
      btn = document.getElementById('btn');


//sending data to server
btn.addEventListener('click', () =>{
  socket.emit('chat-msg', {
    message: message.value,
    myName: myName.value
  });
});

//Listen for data comming back form a server, receive data from server and output it to html

socket.on('chat-msg', (data) =>{
  output.innerHTML += `<p><strong>${data.myName}: </strong>${data.message}</p>`;
});

