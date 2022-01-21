import express from 'express';
import {Sequelize} from "sequelize";

const app = express();
const port = 8000;

const sequelize = new Sequelize('postgres://postgres:localhost:5432/smalltalk');
const Organization = require("./models/organization")
const User = require("./models/user")
const Post = require("./models/post")
const Comment = require("./models/comment")

sequelize.sync()

app.get('/', ((req, res) => {
    res.send('Hello world')
}))

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})
