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
exports.DoublyLinkedList = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.next = null;
        this.prev = null;
        this.value = value;
    }
    return ListNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }
    /**
     * Implement the iterable protocol
     */
    DoublyLinkedList.prototype[Symbol.iterator] = function () {
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
    DoublyLinkedList.fromArray = function (array) {
        var list = new DoublyLinkedList();
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
    DoublyLinkedList.prototype.getNode = function (index) {
        if (index < 0 || index > this.size - 1 || this.size === 0) {
            return null;
        }
        var current = null;
        if (index < Math.floor(this.size / 2)) {
            current = this.head;
            while (index > 0) {
                current = current.next;
                index--;
            }
        }
        else {
            current = this.tail;
            while (index < this.size - 1) {
                current = current.prev;
                index++;
            }
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
    DoublyLinkedList.prototype.get = function (index) {
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
    DoublyLinkedList.prototype.insert = function (value, index) {
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
        previous.next.prev = newNode;
        previous.next = newNode;
        newNode.prev = previous;
        this.size++;
        return true;
    };
    /**
     * Removes a node from the end of the list
     *
     * Time complexity: O(1)
     * Space complexity: O(1)
     *
     * @returns {T | null}
     */
    DoublyLinkedList.prototype.pop = function () {
        if (this.size < 2) {
            var node = this.head;
            this.head = null;
            this.tail = null;
            this.size = 0;
            return node ? node.value : null;
        }
        else {
            var node = this.tail;
            node.prev.next = null;
            this.tail = node.prev;
            node.prev = null;
            this.size--;
            return node.value;
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
    DoublyLinkedList.prototype.push = function (value) {
        var newNode = new ListNode(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
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
    DoublyLinkedList.prototype.remove = function (index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.size - 1) {
            return this.pop();
        }
        var node = this.getNode(index);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = null;
        node.prev = null;
        this.size--;
        return node.value;
    };
    /**
     * Reverses the list
     *
     * Time complexity: O(n)
     * Space complexity: O(1)
     *
     * @returns {DoublyLinkedList<T>}
     */
    DoublyLinkedList.prototype.reverse = function () {
        if (this.size < 2) {
            return this;
        }
        var current = this.tail;
        var temp = null;
        var counter = this.size - 1;
        while (counter >= 0) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = temp;
            counter--;
        }
        var head = this.head;
        this.head = this.tail;
        this.tail = head;
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
    DoublyLinkedList.prototype.set = function (value, index) {
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
    DoublyLinkedList.prototype.shift = function () {
        var node = this.head;
        if (this.size < 2) {
            this.head = null;
            this.tail = null;
            this.size = 0;
        }
        else {
            this.head = this.head.next;
            this.head.prev = null;
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
    DoublyLinkedList.prototype.toString = function () {
        var output = "";
        var current = this.head;
        while (current) {
            output += current.value;
            current = current.next;
            if (current) {
                output += "<>";
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
    DoublyLinkedList.prototype.unshift = function (value) {
        var newNode = new ListNode(value);
        newNode.next = this.head;
        if (this.head) {
            this.head.prev = newNode;
        }
        if (this.size === 0) {
            this.tail = newNode;
        }
        this.head = newNode;
        return ++this.size;
    };
    return DoublyLinkedList;
}());
exports.DoublyLinkedList = DoublyLinkedList;
//# sourceMappingURL=index.js.map