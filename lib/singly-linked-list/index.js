"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglyLinkedList = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.next = null;
        this.value = value;
    }
    return ListNode;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }
    /**
     * Implement the iterable protocol
     */
    SinglyLinkedList.prototype[Symbol.iterator] = function () {
        var current;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    current = this.head;
                    _a.label = 1;
                case 1:
                    if (!current) return [3 /*break*/, 3];
                    return [4 /*yield*/, current.value];
                case 2:
                    _a.sent();
                    current = current.next;
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    };
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
    SinglyLinkedList.fromArray = function (array) {
        var list = new SinglyLinkedList();
        array.forEach(function (value) {
            list.push(value);
        });
        return list;
    };
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
    SinglyLinkedList.prototype.getNode = function (index) {
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
     * Retrieves the element at given index
     *
     * Time complexity: O(n)
     * Space complexity: O(1)
     *
     * @param {number} index
     *
     * @returns {T | null}
     */
    SinglyLinkedList.prototype.get = function (index) {
        var node = this.getNode(index);
        return node ? node.value : null;
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
    SinglyLinkedList.prototype.insert = function (value, index) {
        if (index < 0 || index > this.size) {
            return false;
        }
        if (index === this.size) {
            return !!this.push(value);
        }
        if (index === 0) {
            return !!this.unshift(value);
        }
        var previous = this.getNode(index - 1);
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
     * @returns {T | null}
     */
    SinglyLinkedList.prototype.pop = function () {
        if (this.size < 2) {
            var node = this.head;
            this.head = null;
            this.tail = null;
            this.size = Math.max(0, --this.size);
            return node ? node.value : null;
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
            return next.value;
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
    SinglyLinkedList.prototype.push = function (value) {
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
     * @returns {T | null}
     */
    SinglyLinkedList.prototype.remove = function (index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.size - 1) {
            return this.pop();
        }
        var previous = this.getNode(index - 1);
        var toBeRemoved = previous.next;
        previous.next = toBeRemoved.next;
        toBeRemoved.next = null;
        this.size--;
        return toBeRemoved.value;
    };
    /**
     * Reverses the list
     *
     * Time complexity: O(n)
     * Space complexity: O(1)
     *
     * @returns {SinglyLinkedList<T>}
     */
    SinglyLinkedList.prototype.reverse = function () {
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
    SinglyLinkedList.prototype.set = function (value, index) {
        var node = this.getNode(index);
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
     * @returns {T | null}
     */
    SinglyLinkedList.prototype.shift = function () {
        var node = this.head;
        if (this.size < 2) {
            this.head = null;
            this.tail = null;
            this.size = 0;
        }
        else {
            this.head = this.head.next;
            node.next = null;
            this.size--;
        }
        return node ? node.value : null;
    };
    /**
     * Overrides the generic toString method
     *
     * Time complexity: O(n)
     * Space complexity: O(n)
     *
     */
    SinglyLinkedList.prototype.toString = function () {
        var output = "";
        var current = this.head;
        while (current) {
            output += current.value;
            current = current.next;
            if (current) {
                output += "->";
            }
        }
        return output;
    };
    /**
     * Adds a new node to the beginning of the list
     *
     * Time complexity: O(1)
     * Space complexity: O(1)
     *
     * @returns {number} - the updated size of the list
     */
    SinglyLinkedList.prototype.unshift = function (value) {
        var newNode = new ListNode(value);
        newNode.next = this.head;
        if (this.size === 0) {
            this.tail = newNode;
        }
        this.head = newNode;
        return ++this.size;
    };
    return SinglyLinkedList;
}());
exports.SinglyLinkedList = SinglyLinkedList;
//# sourceMappingURL=index.js.map