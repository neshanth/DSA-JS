class Stack {
    constructor() {
        this.stack = []
    }

    push(val) {
        this.stack.push(val)
        return val
    }
    pop() {
        return this.stack.pop()
    }
    size() {
        return this.stack.length;
    }
    isEmpty() {
        return this.size() === 0
    }
    peek() {
        if (!this.isEmpty()) {
            return this.stack[this.stack.length - 1]
        }
        return "Stack is Empty"
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack) // [10,20,30]
stack.pop()
stack.pop()
stack.pop()
console.log(stack.peek()) // Stack is Empty
stack.push(100)
console.log(stack.peek()) // 100
