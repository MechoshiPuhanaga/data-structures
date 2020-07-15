"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryHeap = void 0;
var helpers_1 = require("../helpers");
var BinaryHeap = /** @class */ (function () {
    function BinaryHeap(comparator) {
        if (typeof comparator !== "function") {
            throw new Error("comparator should be function: Comparator<T> = (a: T, b: T) => boolean");
        }
        this.comparator = comparator;
        this.size = 0;
        this.values = [];
    }
    /**
     * Returns the root element without
     * extracting it.
     * NB: Don't modify if it's an object
     *
     * Time complexity: O(1)
     * Space complexity: O(1)
     *
     * @returns {T | null}
     */
    BinaryHeap.prototype.root = function () {
        return this.values[0] || null;
    };
    /**
     * Finds the right spot of a newly
     * added element
     *
     * Time complexity: O(logN)
     * Space complexity: O(1)
     *
     */
    BinaryHeap.prototype.bubbleUp = function () {
        var currentIndex = this.values.length - 1;
        var parentIndex = Math.floor((currentIndex - 1) / 2);
        while (parentIndex >= 0) {
            if (this.comparator(this.values[currentIndex], this.values[parentIndex])) {
                helpers_1.swap(this.values, currentIndex, parentIndex);
                currentIndex = parentIndex;
                parentIndex = Math.floor((currentIndex - 1) / 2);
            }
            else {
                break;
            }
        }
    };
    /**
     * Find the right place of the temporary
     * root. Used in extract method.
     *
     * Time complexity: O(logN)
     * Space complexity: O(1)
     *
     */
    BinaryHeap.prototype.sinkDown = function () {
        var length = this.values.length;
        var currentIndex = 0;
        var current = this.values[currentIndex];
        var leftChildIndex = 2 * currentIndex + 1;
        var leftChild = this.values[leftChildIndex];
        var rightChildIndex = leftChildIndex + 1;
        var rightChild = this.values[rightChildIndex];
        while (leftChildIndex < length) {
            if (rightChildIndex < length) {
                var indexToCompare = this.comparator(rightChild, leftChild)
                    ? rightChildIndex
                    : leftChildIndex;
                var elementToCompare = this.values[indexToCompare];
                if (this.comparator(elementToCompare, current)) {
                    helpers_1.swap(this.values, currentIndex, indexToCompare);
                    currentIndex = indexToCompare;
                }
                else {
                    break;
                }
            }
            else {
                if (this.comparator(leftChild, current)) {
                    helpers_1.swap(this.values, currentIndex, leftChildIndex);
                    currentIndex = leftChildIndex;
                }
                else {
                    break;
                }
            }
            leftChildIndex = 2 * currentIndex + 1;
            leftChild = this.values[leftChildIndex];
            rightChildIndex = leftChildIndex + 1;
            rightChild = this.values[rightChildIndex];
        }
    };
    /**
     * Extract the root element and
     * set a new one.
     *
     * Time complexity: O(logN)
     * Space complexity: O(1)
     *
     * @returns {T | null}
     */
    BinaryHeap.prototype.extract = function () {
        var value = null;
        switch (this.size) {
            case 0:
                break;
            case 1:
                value = this.values.pop();
                break;
            default:
                helpers_1.swap(this.values, 0, this.size - 1);
                value = this.values.pop();
                this.sinkDown();
        }
        this.size = Math.max(0, --this.size);
        return value;
    };
    /**
     * Add element to the heap
     *
     * Time complexity: O(logN)
     * Space complexity: O(1)
     *
     * @param {T} value
     *
     * @returns {number}
     */
    BinaryHeap.prototype.insert = function (value) {
        this.values.push(value);
        this.bubbleUp();
        return ++this.size;
    };
    /**
     * Overrides the generic toString method
     *
     * Time complexity: O(n)
     * Space complexity: O(n)
     *
     */
    BinaryHeap.prototype.toString = function () {
        return "BinaryHeap " + this.values.toString();
    };
    return BinaryHeap;
}());
exports.BinaryHeap = BinaryHeap;
//# sourceMappingURL=index.js.map