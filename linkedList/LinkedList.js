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
            return newNode
        }

        const currentTail = this.tail
        currentTail.next = newNode
        this.tail = newNode
        this.length++
    }

    prepend(val) {
        const newNode = new Node(val)
        // check if first node
        if (!this.head) {
            this.head = this.tail = newNode
            return null
        }
        const currentHeadNode = this.head
        newNode.next = currentHeadNode
        this.head = newNode
        this.length++
    }

    removeFirstNode() {
        if (!this.head) {
            return null
        }
        let currentHeadNode = this.head
        this.head = currentHeadNode.next
        currentHeadNode = null
        this.length--
    }

    removeLastNode() {
        if (!this.tail) {
            return null
        }

        if (this.length === 1) {
            this.head = this.tail = null
            this.length--
            return null
        }

        let node = this.getPreviousNode(this.tail)
        node.next = null
        this.tail = node
        this.length--
    }

    getPreviousNode(node) {
        let current = this.head
        let prev = null
        while (current !== node) {
            prev = current
            current = current.next
        }
        return prev
    }

    insertNode(val, index) {
        const newNode = new Node(val)
        if (index <= 0) {
            this.prepend(val)
            return
        }

        if (index >= this.length) {
            this.append(val)
            return
        }

        let current = this.head
        let prev = null
        let counter = 0

        while (current && counter !== index) {
            prev = current
            current = current.next
            counter++
        }

        prev.next = newNode
        newNode.next = current
        this.length++
    }

    removeNode(index) {
        if (index < 0 || index > this.length) {
            return null
        }

        if (index === 0) {
            this.removeFirstNode()
            return
        }

        if (index === this.length) {
            this.removeLastNode()
        }

        let current = this.head
        let prev = null
        let counter = 0

        while (current && counter !== index) {
            prev = current
            current = current.next
            counter++
        }

        prev.next = current.next
        this.length--

    }
}

const l1 = new LinkedList()
l1.append(10)
l1.append(20)
l1.append(30)
l1.insertNode(100, 40)
l1.prepend(5)
l1.insertNode(15, 2)
l1.insertNode(-2, -1)
l1.removeNode(2)
l1.print()
console.log(l1);
