'use strict';

module.exports = function(app) {
    const binaryTree = require('../controllers/treeController');

    // todoList Routes
	app.route('/tree')
		.get(binaryTree.getTree)
		.post(binaryTree.createTree)
	    .delete(binaryTree.cleanTree);


    app.route('/ancestor')
        .post(binaryTree.commonAncestor);

};
