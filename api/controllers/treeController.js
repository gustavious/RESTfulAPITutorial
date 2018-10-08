'use strict';

const treeModel = require('../Model/treeModel');
let bt = new treeModel.binaryTree();
console.log('tree current value',bt);

exports.getTree = function(req, res) {
    res.json(bt);
};

exports.cleanTree = function(req, res) {
    bt = new treeModel.binaryTree();
    res.json(bt);
};


exports.createTree = function(req, res) {
    console.log('Received Input:', JSON.stringify(req.body));
    // bt = new treeModel.binaryTree();
    let nodesToInsert = String(req.body).split(',');
    nodesToInsert.forEach(function (number) {
        bt.push(number);
    });
    res.json(bt);
};


exports.commonAncestor = function(req, res) {
    console.log('Found Ancestor between:', JSON.stringify(req.body));
    let nodeToCompare = String(req.body).split(',');
    const ancestor = treeModel.commonAncestor(bt.root, nodeToCompare[0], nodeToCompare[1]);
    res.send(`Ancestor(${nodeToCompare[0]},${nodeToCompare[1]})=${ancestor.value}`);
};
