class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    add(value) {
        let node = new Node(value)
        if (this.size == 0) {
            this.head = node
        }
        else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    remove(value) {
        if (this.head.data === value) {
            this.head = this.head.next;
            this.length--;
            return true;
        } else
            for (let current = this.head; current.next; current = current.next)
                if (current.next.data === value) {
                    current.next = current.next.next;
                    this.length--;
                    return true;
                }
        return false;
    }
    contains(value) {
        for (let current = this.head; current; current = current.next)
            if (current.data === value)
                return true;
        return false;
    }
    clear() {
        this.head = null;
    }
    count() {
        return this.length;
    }
    log() {
        let res = ''
        let index = 0
        let current = this.head
        while (current) {
            res += current.data.toString()
            if (index !== this.size - 1) {
                res += ', '
            }
            
            current = current.next
            index++
        }
        console.log(res)
    }
    [Symbol.iterator] = function() {
        let current = this.head;
        return {
            next() {
                if (current) {
                    let value = current.data;
                    current = current.next;
                    return {value: value, done: false};
                }
                return {done: true};
            }
        };
    };
}
function createLinkedList(arr) {
    let ll = new LinkedList()
    for (let num of arr) {
        ll.add(num)
    }
    return ll
}
