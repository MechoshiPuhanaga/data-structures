declare class ListNode<T> {
    next: ListNode<T> | null;
    value: T;
    constructor(value: T);
}
export declare class SingleLinkedList<T> {
    head: ListNode<T> | null;
    tail: ListNode<T> | null;
    size: number;
    constructor();
    /**
     * Adds a node to the end of the list
     *
     * Time complexity: 0(1)
     *
     * @param {T} - the value to be added
     * @returns {number} - the updated size of the list
     */
    push(value: T): number;
    /**
     * Removes a node from the end of the list
     *
     * Time complexity: 0(n)
     *
     * @returns {ListNode<T> | null}
     */
    pop(): ListNode<T> | null;
    /**
     * Removes a node from the beginning of the list
     *
     * Time complexity: 0(1)
     *
     * @returns {ListNode<T> | null}
     */
    shift(): ListNode<T> | null;
    /**
     * Adds a new node to the beginning of the list
     *
     * Time complexity: 0(1)
     *
     * @returns {number} - the updated size of the list
     */
    unshift(value: T): number;
}
export {};
//# sourceMappingURL=index.d.ts.map