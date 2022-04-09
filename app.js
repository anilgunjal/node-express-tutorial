const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.write('Home page');
        res.end()
    } else if(req.url === '/about') {
        res.write('About page');
        res.end()
    } else { res.end(`<p>URL not found</p>`) }
})
server.listen(5000)