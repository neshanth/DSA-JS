class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    print() {
        let current = this.head

        while (current !== null) {
            console.log(current.val)
            current = current.next
        }
    }

    append(val) {
        const newNode = new Node(val)
        // check if first node
        if (!this.head) {
            this.head = this.tail = newNode
            return
        }

        const currentTail = this.tail
        currentTail.next = newNode
        this.tail = newNode
    }

    prepend(val) {
        const newNode = new Node(val)
        // check if first node
        if (!this.head) {
            this.head = this.tail = newNode
            return
        }

        const currentHeadNode = this.head
        newNode.next = currentHeadNode
        this.head = newNode
    }
}

const l1 = new LinkedList()
l1.append(10)
l1.append(20)
l1.append(30)
l1.prepend(5)
l1.print()
console.log(l1);
