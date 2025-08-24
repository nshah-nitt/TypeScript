class ListNode<T>{
    next?:ListNode<T>
    constructor(public value: T){}
}

class LinkedList<T> {
    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private length: number = 0

    public add (value:T) {
        const node = new ListNode(value);
        if(!this.tail){
            this.root = node;
            this.tail = node;
        }
        else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    public getNumberofElements (){
        return this.length
    }

    public print(){
        let current = this.root;
        while(current){
            console.log(`Current Node has a value ${current.value}\n`);
            current = current.next;
        }
    }
}

