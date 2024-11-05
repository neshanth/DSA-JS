class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(val) {
        this.queue.push(val)
    }

    dequeue() {
        if (this.queue.length > 0) {
            this.queue.shift()
        } else {
            return null
        }
    }

    read() {
        if (this.queue.length > 0) {
            return this.queue[0]
        } else {
            return null
        }
    }
}

const q1 = new Queue()
q1.enqueue(10)
q1.enqueue(20)
console.log(q1.read())
q1.dequeue()

console.log(q1.read())