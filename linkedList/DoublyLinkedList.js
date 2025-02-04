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
    insertNode(val, index) {
        if (index < 0) return null
        if (index === 0) return this.prepend(val)
        if (index >= this.length) return this.append(val)

        let current = this.head;
        let counter = 0;
        // Start iterating till we get the node at index given
        while (current && counter !== index) {
            current = current.next;
            counter++
        }
        // Create a new node
        const newNode = new Node(val)
        // Set the next pointer to point to new node
        newNode.next = current
        // Also set prev to point to whatever was the previous node of current
        newNode.prev = current.prev;

        if (current.prev) {
            // node that is before current, will have next pointing to current node. 
            // Make it point to new Node since, that will take the place of current
            current.prev.next = newNode
        }
        current.prev = newNode
        this.length++
        return newNode
    }
    removeNode(index) {
        if (!this.head) return null
        if (index < 0 || index > this.length) return null
        if (index === 0 || this.length === 1) return this.removeFirstNode();
        if (index === this.length - 1) return this.removeLastNode();
        let current = this.head
        let counter = 0;
        while (current && counter !== index) {
            current = current.next;
            counter++
        }
        // update next and prev pointers of current node
        if (current.next) {
            current.next.prev = current.prev;
        }
        if (current.prev) {
            current.prev.next = current.next;
        }
        this.length--
        return current
    }
    printList() {
        let current = this.head
        let res = ""
        while (current) {
            res += current.val
            current = current.next
            if (current) res += "->"
        }
        console.log(res)
    }
}

const dd = new DoublyLinkedList();
dd.append(1);
dd.append(2)
dd.prepend(0);
dd.insertNode(1.5, 1)
dd.removeNode(1)
dd.append(100)
dd.printList()