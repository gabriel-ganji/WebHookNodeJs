let http = require('http');

const app = require("./app");

const port = process.env.PORT || 9200;

const server = http.createServer(app);

server.listen(port, () => {

  console.log('Listening on port: ', port);

});
