const AVLTree = require("./AVLTree.js");
const avl = new AVLTree();

avl.insert(30);
avl.insert(20);
avl.insert(10);

avl.inOrder();