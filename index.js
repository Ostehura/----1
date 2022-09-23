const http = require('http');
const { WelcomeClass } = require('./Class');

const server = http.createServer((req, res) => {

    let welcome = new WelcomeClass(req.url.slice(1));
    res.write(welcome.getGreeting())
    res.end()

})

server.listen(5000)