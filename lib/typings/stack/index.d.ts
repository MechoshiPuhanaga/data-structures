declare class Node<T> {
    next: Node<T> | null;
    value: T;
    constructor(value: T);
}
export declare class Stack<T> {
    head: Node<T> | null;
    size: number;
    constructor();
    /**
     * Implement the iterable protocol
     */
    [Symbol.iterator](): Generator<T, void, unknown>;
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
    pop(): T | null;
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
    push(value: T): number;
    /**
     * Overrides the generic toString method
     *
     * Time complexity: O(n)
     * Space complexity: O(n)
     *
     */
    toString(): string;
}
export {};
//# sourceMappingURL=index.d.ts.map