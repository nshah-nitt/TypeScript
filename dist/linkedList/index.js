class ListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    root;
    tail;
    length = 0;
    constructor() {
        this.root = undefined;
        this.tail = undefined;
    }
    addAttail(value) {
        // added a new value
        const node = new ListNode(value);
        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        }
        else {
            // if this is the first node set the root and the tail
            this.root = node;
            this.tail = node;
        }
        this.length++;
    }
    addAtHead(val) {
        let node = new ListNode(val);
        if (this.root) {
            node.next = this.root;
            this.root = node;
        }
        else {
            // if this is the first node set the root and the tail
            this.root = node;
            this.tail = node;
        }
        this.length++;
    }
    getNumberofElements() {
        return this.length;
    }
    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
    addAtPos(index, value) {
        if (index > this.length)
            return;
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
        for (let i = 0; i < index - 1; i++) {
            prev = prev?.next;
        }
        if (prev) {
            node.next = prev.next;
            prev.next = node;
            this.length++;
        }
        return;
    }
}
let linked1 = new LinkedList();
linked1.addAtHead(1);
linked1.addAttail(2);
// linked1.print();
linked1.addAtPos(1, 9);
linked1.addAtPos(3, 56);
// console.log(linked1.getNumberofElements());
linked1.print();
export {};
