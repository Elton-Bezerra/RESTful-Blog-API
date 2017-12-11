const store = require('../model/posts.js');
module.exports = {
	//get all posts
	getPosts(req, res){
		res.status(200).send(store.posts);	
	},

	//insert a post
	insertPost(req, res){
		let newPost = req.body;	
		let id = store.posts.length;	
		store.posts.push(newPost);		
		res.status(201).send({id: id});
	},

	//update a post
	updatePost(req, res){
		store.posts[req.params.postId] = req.body;
		res.status(200).send(store.posts[req.params.postId]);
	},

	//delete a post
	deletePost(req, res) {		
		store.posts.splice(req.params.postId, 1);
		res.status(204).send();
	}
}