import { SingleLinkedList } from "./lib/single-linked-list";

const sll = new SingleLinkedList();
sll.push(4);
sll.push(5);
sll.push(6);

console.dir(sll.reverse());
