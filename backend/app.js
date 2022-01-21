import express from 'express';
import Organization from "./models/organization.js"
import User from "./models/user.js"
import Post from "./models/post.js"
import Comment from "./models/comment.js"

const app = express();
const port = 8000;

const init = async () => {
    await Organization.sync()
    await User.sync()
    await Post.sync()
    await Comment.sync()
}

app.get('/', ((req, res) => {
    res.send('Hello world')
}))

app.listen(port, async () => {
    await init()
    console.log(`Server running at http://localhost:${port}/`);
})
