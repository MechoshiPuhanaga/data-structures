"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleLinkedList = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.next = null;
        this.value = value;
    }
    return ListNode;
}());
var SingleLinkedList = /** @class */ (function () {
    function SingleLinkedList() {
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
    SingleLinkedList.prototype.get = function (index) {
        if (index < 0 || index > this.size - 1 || this.size === 0) {
            return null;
        }
        var current = this.head;
        while (index > 0) {
            current = current.next;
            index--;
        }
        return current;
    };
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
    SingleLinkedList.prototype.insert = function (value, index) {
        if (index < 0 || index > this.size) {
            return false;
        }
        if (index === this.size) {
            return !!this.push(value);
        }
        if (index === 0) {
            return !!this.unshift(value);
        }
        var previous = this.get(index - 1);
        var newNode = new ListNode(value);
        newNode.next = previous.next;
        previous.next = newNode;
        this.size++;
        return true;
    };
    /**
     * Removes a node from the end of the list
     *
     * Time complexity: O(n)
     * Space complexity: O(1)
     *
     * @returns {ListNode<T> | null}
     */
    SingleLinkedList.prototype.pop = function () {
        if (this.size < 2) {
            var node = this.head;
            this.head = null;
            this.tail = null;
            this.size = Math.max(0, --this.size);
            return node;
        }
        else {
            var current = this.head;
            var next = current.next;
            while (next && next.next) {
                current = next;
                next = next.next;
            }
            this.tail = current;
            current.next = null;
            this.size--;
            return next;
        }
    };
    /**
     * Adds a node to the end of the list
     *
     * Time complexity: O(1)
     * Space complexity: O(1)
     *
     * @param {T} - the value to be added
     * @returns {number} - the updated size of the list
     */
    SingleLinkedList.prototype.push = function (value) {
        var newNode = new ListNode(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return ++this.size;
    };
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
    SingleLinkedList.prototype.remove = function (index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.size - 1) {
            return this.pop();
        }
        var previous = this.get(index - 1);
        var toBeRemoved = previous.next;
        previous.next = toBeRemoved.next;
        toBeRemoved.next = null;
        this.size--;
        return toBeRemoved;
    };
    /**
     * Reverses the list
     *
     * Time complexity: O(n)
     * Space complexity: O(1)
     *
     * @returns {SingleLinkedList<T>}
     */
    SingleLinkedList.prototype.reverse = function () {
        if (this.size < 2) {
            return this;
        }
        var previous = this.head;
        var current = previous.next;
        var next = null;
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
    };
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
    SingleLinkedList.prototype.set = function (value, index) {
        var node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Removes a node from the beginning of the list
     *
     * Time complexity: O(1)
     * Space complexity: O(1)
     *
     * @returns {ListNode<T> | null}
     */
    SingleLinkedList.prototype.shift = function () {
        var node = this.head;
        if (this.size < 2) {
            this.head = null;
            this.tail = null;
            this.size = Math.max(0, --this.size);
            return node;
        }
        else {
            this.head = this.head.next;
            node.next = null;
            if (this.size === 2) {
                this.tail = this.head;
            }
            this.size--;
            return node;
        }
    };
    /**
     * Adds a new node to the beginning of the list
     *
     * Time complexity: O(1)
     * Space complexity: O(1)
     *
     * @returns {number} - the updated size of the list
     */
    SingleLinkedList.prototype.unshift = function (value) {
        var newNode = new ListNode(value);
        newNode.next = this.head;
        if (this.size === 0) {
            this.tail = newNode;
        }
        this.head = newNode;
        return ++this.size;
    };
    return SingleLinkedList;
}());
exports.SingleLinkedList = SingleLinkedList;
//# sourceMappingURL=index.js.map