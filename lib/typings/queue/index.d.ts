declare class Node<T> {
    next: Node<T> | null;
    value: T;
    constructor(value: T);
}
export declare class Queue<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    size: number;
    constructor();
    /**
     * Implement the iterable protocol
     */
    [Symbol.iterator](): Generator<T, void, unknown>;
    /**
     * Removes and returns the first element
     * in the queue
     *
     * Time complexity: O(1)
     * Space complexity: O(1)
     *
     * @returns {T | null}
     */
    dequeue(): T | null;
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
    enqueue(value: T): number;
    /**
     * Overrides the generic toString method
     *
     * Time complexity: O(n)
     * Space complexity: O(n)
     *
     * @returns {string}
     */
    toString(): string;
}
export {};
//# sourceMappingURL=index.d.ts.map