//  Doubly Linked List
class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  // Adds to the end of the list : tail
  append(value) {
    // if list is empty
    if (!this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      let oldTail = this.tail;
      this.tail = new Node(value);
      oldTail.next = this.tail;
      this.tail.prev = oldTail;
    }
  }

  // Adds to the beginning of the list: head
  prepend(value) {
    // if list is empty
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head;
      this.head = new Node(value);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  }

  deleteHead() {
    // if list is empty
    if (!this.head) {
      return null;
    } else {
      let removedHead = this.head;
      // if 1 node left
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return removedHead.value;
    }
  }

  deleteTail() {
    // if list empty
    if (!this.tail) {
      return null;
    } else {
      let removedTail = this.tail;
      // if 1 node left
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      return removedTail.value;
    }
  }

  search(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
console.log(list);

// prints:
// LinkedList {
//   tail: Node {
//     value: 3,
//     prev: Node { value: 2, prev: [Node], next: [Circular] },
//     next: null
//   },
//   head: Node {
//     value: 1,
//     prev: null,
//     next: Node { value: 2, prev: [Circular], next: [Node] }
//   }
// }

list.prepend(0);
list.prepend(-1);
console.log(list);

// prints:
// LinkedList {
//   tail: Node {
//     value: 3,
//     prev: Node { value: 2, prev: [Node], next: [Circular] },
//     next: null
//   },
//   head: Node {
//     value: -1,
//     prev: null,
//     next: Node { value: 0, prev: [Circular], next: [Node] }
//   }
// }

console.log('### Search ###\n', list.search(1));

// prints:
// Node {
//   value: 1,
//   prev: Node {
//     value: 0,
//     prev: Node { value: -1, prev: null, next: [Circular] },
//     next: [Circular]
//   },
//   next: Node {
//     value: 2,
//     prev: [Circular],
//     next: Node { value: 3, prev: [Circular], next: null }
//   }
// }

console.log(list.search(999)); // returns null

console.log(list.deleteHead()); // returns -1
console.log(list.deleteTail()); // return 3

console.log(list);
// prints:
// LinkedList {
//   tail: Node {
//     value: 2,
//     prev: Node { value: 1, prev: [Node], next: [Circular] },
//     next: null
//   },
//   head: Node {
//     value: 0,
//     prev: null,
//     next: Node { value: 1, prev: [Circular], next: [Node] }
//   }
// }

// NOTE TO MYSELF: I still have to wrap my head around it :/
