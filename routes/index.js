const posts = require('./posts');
const comments = require('./comments');
const express = require('express');

var router = express.Router();
router.get('/posts', posts.getPosts);
router.post('/posts', posts.insertPost);
router.put('/posts/:postId', posts.updatePost);
router.delete('/posts/:postId/', posts.deletePost);


router.get('/posts/:postId/comments', comments.getComments);
router.post('/posts/:postId/comments', comments.postComment);
router.put('/posts/:postId/comments/:commentId', comments.putComment);
router.delete('/posts/:postId/comments/:commentId', comments.deleteComment);

module.exports = router;