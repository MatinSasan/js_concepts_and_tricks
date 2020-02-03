// STACK - Last In First Out
const stack = [];

// === builtin JS methods ===

// push
stack.push('🐵');
stack.push('🐶');
stack.push('🐱');
stack.push('😃');

console.log(stack); // prints ["🐵", "🐶", "🐱", "😃"]

// pop
stack.pop(); // 😃" gets removed

// peek
stack[stack.length - 1]; // "🐱" will be shown

// STACK - doing it programmatically
class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }

  pop() {
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }

  peek() {
    return this.storage[this.size];
  }
}

// QUEUE - First In First Out
const queue = [];

// === builtin JS methods ===

// enqueue
queue.push('🐴');
queue.push('🐮');
queue.push('🐻');

console.log(queue); // prints ["🐴", "🐮", "🐻", ]

// dequeue
queue.shift(); // '🐴' gets removed

// QUEUE - doing it programmatically
class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }

  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}
