//Make connection on frontend(client)
//Here we can use io because its loaded by cdn library in index.html
const socket = io.connect('http://localhost:3000');

//const element = document.querySelectorAll('#output', '#name', '#message', '#btn');
const output = document.getElementById('output');
      myName = document.getElementById('name'),
      message = document.getElementById('message'),
      btn = document.getElementById('btn'),
      feedback = document.getElementById('feedback');


//sending data to server
btn.addEventListener('click', () =>{
  socket.emit('chat-msg', {
    message: message.value,
    myName: myName.value
  });
});

//listen to keydown event

message.addEventListener('keypress', (e) =>{
  socket.emit('typing', myName.value);
})

//Listen for data comming back form a server, receive data from server and output it to html

socket.on('chat-msg', (data) =>{
  feedback.innerHTML = "";
  output.innerHTML += `<p><strong>${data.myName}: </strong>${data.message}</p>`;
});

socket.on('typing', (data) =>{
  feedback.innerHTML = `<p><em>${data} is typing</em></p>`
})

