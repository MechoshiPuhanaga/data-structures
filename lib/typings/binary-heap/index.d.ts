import { Comparator } from '@types';
export declare class BinaryHeap<T> {
    private comparator;
    private values;
    size: number;
    constructor(comparator: Comparator<T>);
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
    root(): T | null;
    /**
  
     * Finds the right spot of a newly
  
     * added element
  
     *
  
     * Time complexity: O(logN)
  
     * Space complexity: O(1)
  
     *
  
     */
    private bubbleUp;
    /**
  
     * Find the right place of the temporary
  
     * root. Used in extract method.
  
     *
  
     * Time complexity: O(logN)
  
     * Space complexity: O(1)
  
     *
  
     */
    private sinkDown;
    /**
  
     * Extract the root element and
  
     * set a new one.
  
     *
  
     * Time complexity: O(logN)
  
     * Space complexity: O(1)
  
     *
  
     * @returns {T | null}
  
     */
    extract(): T | null;
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
    insert(value: T): number;
    /**
  
     * Overrides the generic toString method
  
     *
  
     * Time complexity: O(n)
  
     * Space complexity: O(n)
  
     *
  
     */
    toString(): string;
}
//# sourceMappingURL=index.d.ts.map