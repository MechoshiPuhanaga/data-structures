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
     * Retrieves the element at given index
     *
     * Time complexity: O(n)
     * Space complexity: O(1)
     *
     * @param {number} index
     *
     * @returns {ListNode<T> | null}
     */
    get(index: number): ListNode<T> | null;
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
    insert(value: T, index: number): boolean;
    /**
     * Removes a node from the end of the list
     *
     * Time complexity: O(n)
     * Space complexity: O(1)
     *
     * @returns {ListNode<T> | null}
     */
    pop(): ListNode<T> | null;
    /**
     * Adds a node to the end of the list
     *
     * Time complexity: O(1)
     * Space complexity: O(1)
     *
     * @param {T} - the value to be added
     * @returns {number} - the updated size of the list
     */
    push(value: T): number;
    /**
     *  Removes a node at specified position
     *
     * @param {number} index
     *
     */
    remove(index: number): boolean;
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
    set(value: T, index: number): boolean;
    /**
     * Removes a node from the beginning of the list
     *
     * Time complexity: O(1)
     * Space complexity: O(1)
     *
     * @returns {ListNode<T> | null}
     */
    shift(): ListNode<T> | null;
    /**
     * Adds a new node to the beginning of the list
     *
     * Time complexity: O(1)
     * Space complexity: O(1)
     *
     * @returns {number} - the updated size of the list
     */
    unshift(value: T): number;
}
export {};
//# sourceMappingURL=index.d.ts.map