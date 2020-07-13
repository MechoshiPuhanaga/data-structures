class ListNode<T> {
  next: ListNode<T> | null;
  value: T;

  constructor(value: T) {
    this.next = null;
    this.value = value;
  }
}

export class SingleLinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
  }

  /**
   * Adds a node to the end of the list
   *
   * Time complexity: 0(1)
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
      this.tail = newNode;
    }

    return ++this.size;
  }

  /**
   * Removes a node from the end of the list
   *
   * Time complexity: 0(n)
   *
   * @returns {ListNode<T> | null}
   */
  public pop(): ListNode<T> | null {
    if (this.size < 2) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      this.size = Math.max(0, --this.size);

      return node;
    } else {
      let current = this.head;
      let next = current.next;

      while (next && next.next) {
        current = next;
        next = next.next;
      }

      this.tail = current;
      current.next = null;
      this.size--;

      return next;
    }
  }

  /**
   * Removes a node from the beginning of the list
   *
   * Time complexity: 0(1)
   *
   * @returns {ListNode<T> | null}
   */
  public shift(): ListNode<T> | null {
    const node = this.head;

    if (this.size < 2) {
      this.head = null;
      this.tail = null;
      this.size = Math.max(0, --this.size);

      return node;
    } else {
      this.head = this.head.next;
      node.next = null;
      if (this.size === 2) {
        this.tail = this.head;
      }

      this.size--;

      return node;
    }
  }

  /**
   * Adds a new node to the beginning of the list
   *
   * Time complexity: 0(1)
   *
   * @returns {number} - the updated size of the list
   */
  public unshift(value: T): number {
    const newNode = new ListNode(value);

    newNode.next = this.head;
    if (this.size === 0) {
      this.tail = newNode;
    }

    this.head = newNode;

    return ++this.size;
  }
}
