const eventEmitter = require('events')
const http = require('http');
const emitter = new eventEmitter()
 emitter.on('call', () => {
     console.log("called")
 });
 emitter.on('call', (name) => {
     console.log(name)
 });
 emitter.emit('call', 'Anil');

// server event emitter function
const server = http.createServer()
server.on('request', (req, res) => {
    res.end('welcome')
})
server.listen(5000)

// const server = http.createServer((req,res) => {
//     if(req.url === '/') {
//         res.write('Home page');
//         res.end()
//     } else if(req.url === '/about') {
//         res.write('About page');
//         res.end()
//     } else { res.end(`<p>URL not found</p>`) }
// })
// server.listen(5000)