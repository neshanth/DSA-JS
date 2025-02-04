class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    append(val) {
        // create a new node 
        const newNode = new Node(val);
        // check if this is the first node, if so this becomes the new node
        if (!this.head) {
            this.head = this.tail = newNode
        } else {
            // Get the current tail node
            const currentTailNode = this.tail
            // Set the prev pointer of new node to the tail node
            newNode.prev = currentTailNode
            // Set the next pointer of the tail node to new node
            currentTailNode.next = newNode
            // update tail
            this.tail = newNode
        }
        this.length++
        return newNode;
    }

    prepend(val) {
        const newNode = new Node(val);
        // check if this is the first node, if so this becomes the new node
        if (!this.head) {
            this.head = this.tail = newNode
        } else {
            // Get the first node (head)
            const currentHeadNode = this.head;
            // Set the next pointer of new node to this head
            newNode.next = currentHeadNode
            // Set prev pointer of head to this new node
            currentHeadNode.prev = newNode
            // update the head
            this.head = newNode
        }
        this.length++
        return newNode
    }
    removeFirstNode() {
        if (!this.head) {
            return null
        }
        const nodeToRemove = this.head;
        // updating head to point to the next node
        this.head = this.head.next;
        // if this node is the only node and list becomes empty
        if (!this.head) {
            this.tail = null
        } else {
            this.head.prev = null;
        }
        this.length--
        return nodeToRemove
    }
    removeLastNode() {
        if (!this.tail) {
            return null
        }
        const nodeToRemove = this.tail
        this.tail = this.tail.prev;
        if (!this.tail) {
            this.head = null
        } else {
            this.tail.next = null
        }

        this.length--
        return nodeToRemove
    }
}

const dd = new DoublyLinkedList();
dd.append(1);
dd.append(2)
dd.prepend(0);
// dd.removeFirstNode()
dd.removeLastNode()
dd.removeLastNode()
dd.removeLastNode()
console.log(dd)