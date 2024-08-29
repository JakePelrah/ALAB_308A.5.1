import { Stack } from "./Stack.js";


const myStack = new Stack()
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log(myStack.peek()); // Expected output: 30
console.log(myStack.pop());  // Expected output: 30
console.log(myStack.peek()); // Expected output: 20
console.log(myStack.isEmpty()); // Expected output: false
console.log(myStack.size()); // Expected output: 2
myStack.clear();
console.log(myStack.isEmpty()); // Expected output: true