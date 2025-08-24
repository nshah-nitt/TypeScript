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
    add(value) {
        const node = new ListNode(value);
        if (!this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
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
            console.log(`Current Node has a value ${current.value}\n`);
            current = current.next;
        }
    }
}
export {};
