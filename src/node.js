class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;

		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
	
		if (this.left == null) {

			this.left = node;
			this.left.parent = this;

		} else if (this.right == null) {

			this.right = node;
			this.right.parent = this;
		} 
	}

	removeChild(node) {

		if (this.left === node) {

			this.left.parent = null;
			this.left = null;

		} else if (this.right === node) {

			this.right.parent = null;
			this.right = null;

		} else {
			throw new Error('passed node is not a child of this node');
		}
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		  }
	}

	swapWithParent() {
		if (this.parent === null) {
			return;
		}
		this.parent.parent = this;
		
		this.parent.parent.parent = this;
		this.parent = this;
	}	
}

module.exports = Node;
