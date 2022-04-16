class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
export class Stack {
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
    pop() {
        var _a, _b;
        if (this.size === 0) {
            return null;
        }
        const node = this.head;
        this.head = (_a = node === null || node === void 0 ? void 0 : node.next) !== null && _a !== void 0 ? _a : null;
        this.size--;
        return (_b = node === null || node === void 0 ? void 0 : node.value) !== null && _b !== void 0 ? _b : null;
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
    push(value) {
        const newNode = new Node(value);
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
    toString() {
        let output = 'Stack <';
        let current = this.head;
        while (current) {
            output += current.value;
            current = current.next;
            if (current) {
                output += ',';
            }
            else {
                output += '>';
            }
        }
        return output;
    }
}
//# sourceMappingURL=index.js.map