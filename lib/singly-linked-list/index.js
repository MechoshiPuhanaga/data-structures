class ListNode {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
export class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
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
     * Creates a SinglyLinkedList from
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
    static fromArray(array) {
        const list = new SinglyLinkedList();
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
    getNode(index) {
        var _a;
        if (index < 0 || index > this.size - 1 || this.size === 0) {
            return null;
        }
        let current = this.head;
        while (index > 0) {
            current = (_a = current === null || current === void 0 ? void 0 : current.next) !== null && _a !== void 0 ? _a : null;
            index--;
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
    get(index) {
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
    insert(value, index) {
        var _a;
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
        const newNode = new ListNode(value);
        newNode.next = (_a = previous === null || previous === void 0 ? void 0 : previous.next) !== null && _a !== void 0 ? _a : null;
        if (previous === null || previous === void 0 ? void 0 : previous.next) {
            previous.next = newNode;
        }
        this.size++;
        return true;
    }
    /**
     * Removes a node from the end of the list
     *
     * Time complexity: O(n)
     * Space complexity: O(1)
     *
     * @returns {T | null}
     */
    pop() {
        var _a, _b;
        if (this.size < 2) {
            const node = this.head;
            this.head = null;
            this.tail = null;
            this.size = Math.max(0, --this.size);
            return node ? node.value : null;
        }
        else {
            let current = this.head;
            let next = (_a = current === null || current === void 0 ? void 0 : current.next) !== null && _a !== void 0 ? _a : null;
            while (next && next.next) {
                current = next;
                next = next.next;
            }
            this.tail = current;
            if (current === null || current === void 0 ? void 0 : current.next) {
                current.next = null;
            }
            this.size--;
            return (_b = next === null || next === void 0 ? void 0 : next.value) !== null && _b !== void 0 ? _b : null;
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
    push(value) {
        const newNode = new ListNode(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            if (this.tail) {
                this.tail.next = newNode;
            }
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
    remove(index) {
        var _a, _b, _c;
        if (index < 0 || index >= this.size) {
            return null;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.size - 1) {
            return this.pop();
        }
        const previous = this.getNode(index - 1);
        const toBeRemoved = (_a = previous === null || previous === void 0 ? void 0 : previous.next) !== null && _a !== void 0 ? _a : null;
        if (previous === null || previous === void 0 ? void 0 : previous.next) {
            previous.next = (_b = toBeRemoved === null || toBeRemoved === void 0 ? void 0 : toBeRemoved.next) !== null && _b !== void 0 ? _b : null;
        }
        if (toBeRemoved === null || toBeRemoved === void 0 ? void 0 : toBeRemoved.next) {
            toBeRemoved.next = null;
        }
        this.size--;
        return (_c = toBeRemoved === null || toBeRemoved === void 0 ? void 0 : toBeRemoved.value) !== null && _c !== void 0 ? _c : null;
    }
    /**
     * Reverses the list
     *
     * Time complexity: O(n)
     * Space complexity: O(1)
     *
     * @returns {SinglyLinkedList<T>}
     */
    reverse() {
        var _a;
        if (this.size < 2) {
            return this;
        }
        let previous = this.head;
        let current = (_a = previous === null || previous === void 0 ? void 0 : previous.next) !== null && _a !== void 0 ? _a : null;
        let next = null;
        // Set up the tail:
        if (this.head) {
            this.head.next = null;
        }
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
    set(value, index) {
        const node = this.getNode(index);
        if (node) {
            node.value = value;
            return true;
        }
        else {
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
    shift() {
        var _a, _b;
        const node = this.head;
        if (this.size < 2) {
            this.head = null;
            this.tail = null;
            this.size = 0;
        }
        else {
            this.head = (_b = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next) !== null && _b !== void 0 ? _b : null;
            if (node === null || node === void 0 ? void 0 : node.next) {
                node.next = null;
            }
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
    toString() {
        let output = '';
        let current = this.head;
        while (current) {
            output += current.value;
            current = current.next;
            if (current) {
                output += '->';
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
    unshift(value) {
        const newNode = new ListNode(value);
        newNode.next = this.head;
        if (this.size === 0) {
            this.tail = newNode;
        }
        this.head = newNode;
        return ++this.size;
    }
}
//# sourceMappingURL=index.js.map