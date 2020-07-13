import { SingleLinkedList } from "./lib/single-linked-list";

const sll = new SingleLinkedList();
sll.push(1);
sll.push(2);
sll.push(3);
sll.push(4);
sll.push(5);
sll.push(6);

console.log(SingleLinkedList.fromArray(["a", "b", "c"]).reverse().toString());
