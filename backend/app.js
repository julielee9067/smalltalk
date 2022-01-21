import http from 'http';
import {Sequelize} from "sequelize";

const hostname = '127.0.0.1';
const port = 8000;

const sequelize = new Sequelize('postgres://postgres:localhost:5432/smalltalk');
const Organization = require("./models/organization")
const User = require("./models/user")
const Post = require("./models/post")
const Comment = require("./models/comment")

sequelize.sync()

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
