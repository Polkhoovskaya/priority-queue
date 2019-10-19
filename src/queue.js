const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (this.heap.score === this.maxSize) {
			throw new Error('queue has max size');
		} else {
			this.heap.push(data, priority);
		}
	}

	shift() {
		if (this.heap.score === 0) {
			throw new Error('queue is empty');
		} else {
			return this.heap.pop();
		}
	}

	size() {
		return this.heap.score;
	}

	isEmpty() {
		return this.heap.score === 0;
	}
}

module.exports = PriorityQueue;
