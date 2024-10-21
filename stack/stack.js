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
    peek() {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1]
        }
        return "Stack is Empty"
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack)
stack.pop()
console.log(stack);
stack.pop()
stack.pop()
console.log(stack.peek())
