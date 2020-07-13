import { SingleLinkedList } from "./lib/single-linked-list";

const sll = new SingleLinkedList();
sll.push(4);
sll.push(5);
sll.push(6);
console.log(sll);
console.log(sll.unshift(3));
console.log(sll.unshift(2));
console.log(sll.unshift(1));
console.log(sll.unshift(0));
console.log(sll.shift());
console.dir(sll, { depth: null, color: true });
