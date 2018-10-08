exports.binaryTree = function () {
    this.root = null;
};

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

exports.commonAncestor = function commonAncestorBT(node, n1, n2) {
    if(!node) return;

    const val = node.value;
    if(n1 == val || n2 == val){
        return node;
    }
    const left = commonAncestorBT(node.left, n1, n2);
    const right = commonAncestorBT(node.right, n1, n2);
    if(left && right){
        return node;
    }
    return (left) ? left : right;
};

exports.binaryTree.prototype.push = function(val) {
    let root = this.root;

    if(!root){
        this.root = new Node(val);
        return;
    }

    let currentNode = root;
    const newNode = new Node(val);

    while(currentNode){
        if ((currentNode.left && currentNode.left.value == val) ||
            currentNode.right && currentNode.right.value == val){
            break;
        } else if(val < currentNode.value){
            if(!currentNode.left){
                currentNode.left = newNode;
                break;
            } else{
                currentNode = currentNode.left;
            }
        } else{
            if(!currentNode.right){
                currentNode.right = newNode;
                break;
            } else{
                currentNode = currentNode.right;
            }
        }
    }
};