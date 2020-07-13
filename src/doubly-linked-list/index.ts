class ListNode<T> {
  next: ListNode<T> | null;
  prev: ListNode<T> | null;
  value: T;

  constructor(value: T) {
    this.next = null;
    this.prev = null;
    this.value = value;
  }
}

export class DoublyLinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  *[Symbol.iterator]() {
    let current = this.head;

    while (current) {
      yield current.value;
      current = current.next;
    }
  }

  /**
   * Creates a DoublyLinkedList from
   * an array
   *
   * Time complexity: O(n)
   * Space complexity: O(n)
   *
   * @param {Array<P>} array
   *
   * @returns {SinglyLinkedList<P>}
   *
   */
  public static fromArray<P>(array: Array<P>): DoublyLinkedList<P> {
    const list = new DoublyLinkedList<P>();

    array.forEach((value) => {
      list.push(value);
    });

    return list;
  }

  /**
   * Retrieves the node at given index
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   *
   * @param {number} index
   *
   * @returns {ListNode<T> | null}
   */
  private getNode(index: number): ListNode<T> | null {
    if (index < 0 || index > this.size - 1 || this.size === 0) {
      return null;
    }

    let current = null;

    if (index < Math.floor(this.size / 2)) {
      current = this.head;
      while (index > 0) {
        current = current.next;
        index--;
      }
    } else {
      current = this.tail;
      while (index < this.size - 1) {
        current = current.prev;
        index++;
      }
    }

    return current;
  }

  /**
   * Retrieves the element at given index
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   *
   * @param {number} index
   *
   * @returns {T | null}
   */
  public get(index: number): T | null {
    const node = this.getNode(index);

    return node ? node.value : null;
  }

  /**
   * Inserts a new node on a specified position
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   *
   * @param {T} value
   * @param {number} index
   *
   * @returns {boolean}
   */
  public insert(value: T, index: number): boolean {
    if (index < 0 || index > this.size) {
      return false;
    }

    if (index === this.size) {
      return !!this.push(value);
    }

    if (index === 0) {
      return !!this.unshift(value);
    }

    const previous = this.getNode(index - 1);

    const newNode = new ListNode<T>(value);
    newNode.next = previous.next;
    previous.next.prev = newNode;
    previous.next = newNode;
    newNode.prev = previous;
    this.size++;

    return true;
  }

  /**
   * Removes a node from the end of the list
   *
   * Time complexity: O(1)
   * Space complexity: O(1)
   *
   * @returns {T | null}
   */
  public pop(): T | null {
    if (this.size < 2) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      this.size = 0;

      return node ? node.value : null;
    } else {
      const node = this.tail;
      node.prev.next = null;
      this.tail = node.prev;
      node.prev = null;
      this.size--;

      return node.value;
    }
  }

  /**
   * Adds a node to the end of the list
   *
   * Time complexity: O(1)
   * Space complexity: O(1)
   *
   * @param {T} - the value to be added
   * @returns {number} - the updated size of the list
   */
  public push(value: T): number {
    const newNode = new ListNode(value);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    return ++this.size;
  }

  /**
   * Removes a node at specified position
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   *
   * @param {number} index
   *
   * @returns {T | null}
   */
  public remove(index: number): T | null {
    if (index < 0 || index >= this.size) {
      return null;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.size - 1) {
      return this.pop();
    }

    const node = this.getNode(index);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
    this.size--;
    return node.value;
  }

  /**
   * Reverses the list
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   *
   * @returns {DoublyLinkedList<T>}
   */
  public reverse(): DoublyLinkedList<T> {
    if (this.size < 2) {
      return this;
    }

    let current = this.tail;
    let temp = null;
    let counter = this.size - 1;

    while (counter >= 0) {
      temp = current.prev;

      current.prev = current.next;
      current.next = temp;

      current = temp;
      counter--;
    }

    const head = this.head;
    this.head = this.tail;
    this.tail = head;

    return this;
  }

  /**
   * Updates the value of a node on a
   * provided position
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   *
   * @param {T} value
   * @param {number} index
   *
   * @returns {boolean}
   */
  public set(value: T, index: number): boolean {
    const node = this.getNode(index);

    if (node) {
      node.value = value;
      return true;
    } else {
      return false;
    }
  }

  /**
   * Removes a node from the beginning of the list
   *
   * Time complexity: O(1)
   * Space complexity: O(1)
   *
   * @returns {T | null}
   */
  public shift(): T | null {
    const node = this.head;

    if (this.size < 2) {
      this.head = null;
      this.tail = null;
      this.size = 0;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      node.next = null;
      this.size--;
    }

    return node ? node.value : null;
  }

  /**
   * Overrides the generic toString method
   *
   * Time complexity: O(n)
   * Space complexity: O(n)
   *
   */
  public toString(): string {
    let output = "";
    let current = this.head;

    while (current) {
      output += current.value;
      current = current.next;

      if (current) {
        output += "<>";
      }
    }

    return output;
  }

  /**
   * Adds a new node to the beginning of the list
   *
   * Time complexity: O(1)
   * Space complexity: O(1)
   *
   * @returns {number} - the updated size of the list
   */
  public unshift(value: T): number {
    const newNode = new ListNode(value);

    newNode.next = this.head;
    if (this.head) {
      this.head.prev = newNode;
    }

    if (this.size === 0) {
      this.tail = newNode;
    }

    this.head = newNode;

    return ++this.size;
  }
}
