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
   * Retrieves the element at given index
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   *
   * @param {number} index
   *
   * @returns {ListNode<T> | null}
   */
  public get(index: number): ListNode<T> | null {
    if (index < 0 || index > this.size - 1 || this.size === 0) {
      return null;
    }

    let current = this.head;
    while (index > 0) {
      current = current.next;
      index--;
    }

    return current;
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

    const previous = this.get(index - 1);

    const newNode = new ListNode<T>(value);
    newNode.next = previous.next;
    previous.next = newNode;
    this.size++;

    return true;
  }

  /**
   * Removes a node from the end of the list
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
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
   * @returns {ListNode<T> | null}
   */
  public remove(index: number): ListNode<T> | null {
    if (index < 0 || index >= this.size) {
      return null;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.size - 1) {
      return this.pop();
    }

    const previous = this.get(index - 1);
    const toBeRemoved = previous.next;
    previous.next = toBeRemoved.next;
    toBeRemoved.next = null;
    this.size--;
    return toBeRemoved;
  }

  /**
   * Reverses the list
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   *
   * @returns {SingleLinkedList<T>}
   */
  public reverse(): SingleLinkedList<T> {
    if (this.size < 2) {
      return this;
    }

    let previous = this.head;
    let current = previous.next;
    let next = null;

    // Set up the tail:
    this.head.next = null;
    this.tail = this.head;

    while (current) {
      next = current.next;

      // Reverse the pointer:
      current.next = previous;

      // Move forward:
      previous = current;
      current = next;
    }

    this.head = previous;

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
    const node = this.get(index);

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
   * Time complexity: O(1)
   * Space complexity: O(1)
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
