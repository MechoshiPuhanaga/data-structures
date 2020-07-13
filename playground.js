import { DoublyLinkedList } from "./lib/doubly-linked-list";

const dll = new DoublyLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);
dll.push(6);

console.log([...DoublyLinkedList.fromArray([...dll]).reverse()]);
console.log(
  DoublyLinkedList.fromArray(["a", "b", "c", "d", "e"]).reverse().toString()
);
