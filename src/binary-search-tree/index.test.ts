import { BinarySearchTree, Data } from "./index";

let root: BinarySearchTree<Data>;
let rootData: Data;

describe("BinarySearchTree", () => {
  beforeEach(() => {
    rootData = { item: "Root", value: 10 };
    root = new BinarySearchTree(rootData);

    root.insert({ item: null, value: 6 });
    root.insert({ item: null, value: 3 });
    root.insert({ item: null, value: 8 });
    root.insert({ item: null, value: 15 });
    root.insert({ item: null, value: 20 });

    //     10
    //   6    15
    // 3   8     20
  });

  test("insert", () => {
    expect(root.left.data.value).toBe(6);
  });

  test("insert throw error", () => {
    try {
      root.insert({ item: null, value: 20 });
    } catch (error) {
      expect(error.message).toBe("There is already a node with same value!");
    }
  });

  test("contains", () => {
    expect(root.contains(root)).toBe(true);
    expect(root.contains(new BinarySearchTree({ item: null, value: 6 }))).toBe(
      true
    );
    expect(root.contains(new BinarySearchTree({ item: null, value: 3 }))).toBe(
      true
    );
    expect(root.contains(new BinarySearchTree({ item: null, value: 80 }))).toBe(
      false
    );
  });

  test("validate", () => {
    expect(root.validate()).toBe(true);

    const fakeBinarySearchTree_1 = {
      data: <Data>{ item: "Root", value: 2 },
      left: { data: <Data>{ item: null, value: 22 }, validate: root.validate },
      validate: root.validate,
    };

    const fakeBinarySearchTree_2 = {
      data: <Data>{ item: "Root", value: 2 },
      right: { data: <Data>{ item: null, value: 1 }, validate: root.validate },
      validate: root.validate,
    };

    expect(fakeBinarySearchTree_1.validate()).toBe(false);
    expect(fakeBinarySearchTree_2.validate()).toBe(false);
  });

  test("traverseBF", () => {
    const arr: number[] = [];
    const arrTobEqual: number[] = [10, 6, 15, 3, 8, 20];

    root.traverseBF((node) => {
      arr.push(node.data.value);
    });

    expect(arr).toEqual(arrTobEqual);
  });

  test("traverseDFpreOrder", () => {
    const arr: number[] = [];
    const arrTobEqual: number[] = [10, 6, 3, 8, 15, 20];

    root.traverseDFpreOrder((node) => {
      arr.push(node.data.value);
    });

    expect(arr).toEqual(arrTobEqual);
  });

  test("traverseDFpostOrder", () => {
    const arr: number[] = [];
    const arrTobEqual: number[] = [3, 8, 6, 20, 15, 10];

    root.traverseDFpostOrder((node) => {
      arr.push(node.data.value);
    });

    expect(arr).toEqual(arrTobEqual);
  });
});
