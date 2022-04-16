class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}
export class Queue {
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
     * Removes and returns the first element
     * in the queue
     *
     * Time complexity: O(1)
     * Space complexity: O(1)
     *
     * @returns {T | null}
     */
    dequeue() {
        var _a, _b, _c, _d, _e, _f;
        let value = null;
        switch (this.size) {
            case 0:
                break;
            case 1:
                value = (_b = (_a = this.head) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null;
                this.head = null;
                this.tail = null;
                break;
            default:
                value = (_d = (_c = this.head) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : null;
                this.head = (_f = (_e = this.head) === null || _e === void 0 ? void 0 : _e.next) !== null && _f !== void 0 ? _f : null;
        }
        this.size = Math.max(0, --this.size);
        return value;
    }
    /**
     * Adds element to the end of the queue
     *
     * Time complexity: O(1)
     * Space complexity: O(1)
     *
     * @param {T} value
     *
     * @returns {number}
     */
    enqueue(value) {
        const newNode = new Node(value);
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
     * Overrides the generic toString method
     *
     * Time complexity: O(n)
     * Space complexity: O(n)
     *
     * @returns {string}
     */
    toString() {
        let output = 'Queue <';
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