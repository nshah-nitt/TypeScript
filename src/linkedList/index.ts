class ListNode<T> {
  next?: ListNode<T>;
  constructor(public value: T) {}
}

class LinkedList<T> {
  private root?: ListNode<T>;
  private tail?: ListNode<T>;
  private length: number = 0;

  constructor() {
    this.root = undefined;
    this.tail = undefined;
  }

  public addAttail(value: T) {
    // added a new value
    const node = new ListNode(value);
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      // if this is the first node set the root and the tail
      this.root = node;
      this.tail = node;
    }
    this.length++;
  }

  public addAtHead(val: T) {
    let node = new ListNode(val);
    if (this.root) {
      node.next = this.root;
      this.root = node;
    } else {
      // if this is the first node set the root and the tail
      this.root = node;
      this.tail = node;
    }
    this.length++;
  }

  public getNumberofElements() {
    return this.length;
  }

  public print() {
    let current = this.root;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  public addAtPos(index: number, value: T) {
    if (index > this.length) return;

    if (index === 0) {
      this.addAtHead(value);
      return;
    }

    if (index === this.length) {
      this.addAttail(value);
      return;
    }

    let node = new ListNode(value);
    let prev = this.root;

    for (let i = 0; i < index-1; i++) {
        prev = prev?.next
    }

    if (prev) {
      node.next = prev.next;
      prev.next = node;
      this.length++;
    }

    return;
  }
}

let linked1 = new LinkedList<number>();
linked1.addAtHead(1);
linked1.addAttail(2);
// linked1.print();
linked1.addAtPos(1, 9);
linked1.addAtPos(3,56)
// console.log(linked1.getNumberofElements());
linked1.print();
