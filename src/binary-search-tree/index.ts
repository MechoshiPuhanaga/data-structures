export type Data = {
  item: any;
  value: number;
};

export class BinarySearchTree<T> {
  public data: Data;
  public left: BinarySearchTree<Data> | null;
  public right: BinarySearchTree<Data> | null;

  constructor(data: Data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  /**
   * Inserts a new node in the tree.
   *
   * Time complexity: O(log n)
   * Space complexity: O(1)
   *
   * @param {Data} data
   *
   * @returns {void}
   */
  public insert(data: Data): void {
    if (this.data.value > data.value && this.left) {
      this.left.insert(data);
    } else if (this.data.value > data.value) {
      this.left = new BinarySearchTree(data);
    } else if (this.data.value < data.value && this.right) {
      this.right.insert(data);
    } else if (this.data.value < data.value) {
      this.right = new BinarySearchTree(data);
    } else {
      throw new Error("There is already a node with same value!");
    }
  }

  /**
   * Returns if a node already exists in the tree.
   *
   * Time complexity: O(log n)
   * Space complexity: O(1)
   *
   * @param {BinarySearchTree<Data>} node
   *
   * @returns {boolean}
   */
  public contains(node: BinarySearchTree<Data>): boolean {
    if (this.data.value === node.data.value) {
      return true;
    } else if (this.data.value < node.data.value && this.right) {
      return this.right.contains(node);
    } else if (this.data.value > node.data.value && this.left) {
      return this.left.contains(node);
    } else {
      return false;
    }
  }

  /**
   * Returns if is valid binary search tree.
   *
   * Time complexity: O(log n)
   * Space complexity: O(1)
   *
   * @returns {boolean}
   */
  public validate(min: number | null = null, max: number | null = null) {
    if (min && this.data.value > min) {
      return false;
    }

    if (max && this.data.value < max) {
      return false;
    }

    if (this.left && !this.left.validate(this.data.value, max)) {
      return false;
    }

    if (this.right && !this.right.validate(min, this.data.value)) {
      return false;
    }

    return true;
  }

  /**
   * Traverse tree Breadth First.
   *
   * Time complexity: O(n)
   * Space complexity: O(n)
   *
   * @param {function} fn
   *
   * @returns {boolean}
   */
  public traverseBF(fn: (node: BinarySearchTree<Data>) => void) {
    const arr: BinarySearchTree<Data>[] = [this];

    while (arr.length) {
      const node: BinarySearchTree<Data> = arr.shift();

      if (node.left instanceof BinarySearchTree) {
        arr.push(node.left);
      }

      if (node.right instanceof BinarySearchTree) {
        arr.push(node.right);
      }

      typeof fn === "function" && fn(node);
    }
  }

  /**
   * Traverse tree iteratively Depth First Pre Order.
   *
   * Time complexity: O(n)
   * Space complexity: O(n)
   *
   * @param {function} fn
   *
   * @returns {boolean}
   */
  public it_traverseDFpreOrder(fn: (node: BinarySearchTree<Data>) => void) {
    const arr: BinarySearchTree<Data>[] = [this];

    while (arr.length) {
      const node: BinarySearchTree<Data> = arr.shift();

      if (node.right instanceof BinarySearchTree) {
        arr.unshift(node.right);
      }

      if (node.left instanceof BinarySearchTree) {
        arr.unshift(node.left);
      }

      typeof fn === "function" && fn(node);
    }
  }

  /**
   * Traverse tree recursively Depth First Pre Order.
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   *
   * @param {function} fn
   *
   * @returns {boolean}
   */
  public rec_traverseDFpreOrder(fn: (node: BinarySearchTree<Data>) => void) {
    const traverse = (node: BinarySearchTree<Data>): void => {
      typeof fn === "function" && fn(node);

      node.left instanceof BinarySearchTree && traverse(node.left);
      node.right instanceof BinarySearchTree && traverse(node.right);
    };

    traverse(this);
  }

  /**
   * Traverse tree iteratively Depth First Post Order.
   *
   * Time complexity: O(n)
   * Space complexity: O(n)
   *
   * @param {function} fn
   *
   * @returns {boolean}
   */
  public it_traverseDFpostOrder(fn: (node: BinarySearchTree<Data>) => void) {
    const arr: BinarySearchTree<Data>[] = [this];
    const postOrderArr: BinarySearchTree<Data>[] = [];

    while (arr.length) {
      const node: BinarySearchTree<Data> = arr.shift();

      if (node.left instanceof BinarySearchTree) {
        arr.unshift(node.left);
      }

      if (node.right instanceof BinarySearchTree) {
        arr.unshift(node.right);
      }

      postOrderArr.push(node);
    }

    while (postOrderArr.length) {
      const node: BinarySearchTree<Data> = postOrderArr.pop();

      typeof fn === "function" && fn(node);
    }
  }

  /**
   * Traverse tree recursively Depth First Post Order.
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   *
   * @param {function} fn
   *
   * @returns {boolean}
   */
  public rec_traverseDFpostOrder(fn: (node: BinarySearchTree<Data>) => void) {
    const traverse = (node: BinarySearchTree<Data>): void => {
      node.left instanceof BinarySearchTree && traverse(node.left);
      node.right instanceof BinarySearchTree && traverse(node.right);
      typeof fn === "function" && fn(node);
    };

    traverse(this);
  }

  /**
   * Traverse tree recursively Depth First In Order.
   *
   * Time complexity: O(n)
   * Space complexity: O(1)
   *
   * @param {function} fn
   *
   * @returns {boolean}
   */
  public rec_traverseDFinOrder(fn: (node: BinarySearchTree<Data>) => void) {
    const traverse = (node: BinarySearchTree<Data>): void => {
      node.left instanceof BinarySearchTree && traverse(node.left);
      typeof fn === "function" && fn(node);
      node.right instanceof BinarySearchTree && traverse(node.right);
    };

    traverse(this);
  }

  /**
   * Creates a Binary Search Tree from an array.
   *
   * Time complexity: O(n)
   * Space complexity: O(n)
   *
   * @param {Array<Data>} array
   *
   * @returns {BinarySearchTree<Data>}
   *
   */
  public static fromArray(
    array: Array<Data>,
    rootData: Data
  ): BinarySearchTree<Data> {
    const root: BinarySearchTree<Data> = new BinarySearchTree(rootData);

    for (let data of array) {
      root.insert(data);
    }

    return root;
  }
}
