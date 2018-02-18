//Make connection on frontend(client)
//Here we can use io because its loaded by cdn library in index.html
const socket = io.connect('http://localhost:3000');

const element = document.querySelectorAll('#output', '#name', '#message', '#send');