let http = require('http');

const app = require("./app");

const port = process.env.port || 9200;

const server = http.createServer(app);

server.listen(port, () => {
  console.log('litening in port: ', port);
});
