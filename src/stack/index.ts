class Node<T> {
  next: Node<T> | null;
  value: T;

  constructor(value: T) {
    this.next = null;
    this.value = value;
  }
}

export class Stack<T> {
  head: Node<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * Implement the iterable protocol
   */
  *[Symbol.iterator]() {
    let current = this.head;

    while (current) {
      yield current.value;
      current = current.next;
    }
  }

  /**
   * Removes element from the top of the stack
   *
   * Time complexity: O(1)
   * Space complexity: O(1)
   *
   * @param {T} value
   *
   * @returns {number}
   */
  pop(): T | null {
    if (this.size === 0) {
      return null;
    }

    const node = this.head;
    this.head = node.next;

    this.size--;

    return node.value;
  }

  /**
   * Adds element to the top of the stack
   *
   * Time complexity: O(1)
   * Space complexity: O(1)
   *
   * @param {T} value
   *
   * @returns {number}
   */
  push(value: T): number {
    const newNode = new Node<T>(value);

    newNode.next = this.head;
    this.head = newNode;

    return ++this.size;
  }

  /**
   * Overrides the generic toString method
   *
   * Time complexity: O(n)
   * Space complexity: O(n)
   *
   */
  public toString(): string {
    let output = "Stack <";
    let current = this.head;

    while (current) {
      output += current.value;
      current = current.next;

      if (current) {
        output += ",";
      } else {
        output += ">";
      }
    }

    return output;
  }
}