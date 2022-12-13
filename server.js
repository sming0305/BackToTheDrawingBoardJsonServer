const jsonServer = require('json-server');
const server = jsonServer.create();
const auth = require("json-server-auth");
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(auth);
server.use(router);

server.listen(port);
