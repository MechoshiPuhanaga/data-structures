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
exports.Stack = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.next = null;
        this.value = value;
    }
    return Node;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.head = null;
        this.size = 0;
    }
    /**
     * Implement the iterable protocol
     */
    Stack.prototype[Symbol.iterator] = function () {
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
     * Removes element from the top of the stack
     *
     * Time complexity: O(1)
     * Space complexity: O(1)
     *
     * @param {T} value
     *
     * @returns {number}
     */
    Stack.prototype.pop = function () {
        if (this.size === 0) {
            return null;
        }
        var node = this.head;
        this.head = node.next;
        this.size--;
        return node.value;
    };
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
    Stack.prototype.push = function (value) {
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return ++this.size;
    };
    /**
     * Overrides the generic toString method
     *
     * Time complexity: O(n)
     * Space complexity: O(n)
     *
     */
    Stack.prototype.toString = function () {
        var output = "<";
        var current = this.head;
        while (current) {
            output += current.value;
            current = current.next;
            if (current) {
                output += ",";
            }
            else {
                output += ">";
            }
        }
        return output;
    };
    return Stack;
}());
exports.Stack = Stack;
//# sourceMappingURL=index.js.map