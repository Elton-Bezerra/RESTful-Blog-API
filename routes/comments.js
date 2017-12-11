const store = require('../model/posts');

module.exports = {
	getComments (req, res) {
		var comments = store.posts[req.params.postId].comments;
		res.status(200).send(comments);	
	},

	postComment(req, res) {
		let newComment = req.body;	
		let postId = req.params.postId;		
		if(!store.posts[postId].comments){
			store.posts[postId].comments = [];
		}

		store.posts[postId].comments.push(newComment);		
		res.status(201).send({id: store.posts[postId].comments.length});
	},

	putComment(req, res){
		let postId = req.params.postId;
		let commentId = req.params.commentId;
		store.posts[postId].comments[commentId] = req.body;
		res.status(200).send(store.posts[postId].comments[commentId]);
	},

	deleteComment(req, res){
		let postId = req.params.postId;
		let commentId = req.params.commentId;
		store.posts[postId].comments.splice(commentId, 1);
		res.status(204).send();
	}
};