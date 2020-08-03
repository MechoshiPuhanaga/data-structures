import { BinarySearchTree, Data } from "./index";

let root: BinarySearchTree<Data>;
let rootData: Data;

describe("BinarySearchTree", () => {
  beforeEach(() => {
    rootData = { item: "Root", value: 2 };
    root = new BinarySearchTree(rootData);

    root.insert({ item: null, value: 4 });
    root.insert({ item: null, value: 1 });
    root.insert({ item: null, value: 5 });
    root.insert({ item: null, value: -5 });
    root.insert({ item: null, value: 10 });
    root.insert({ item: null, value: 20 });
  });

  test("insert", () => {
    expect(root.left.data.value).toBe(1);
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
    expect(root.contains(new BinarySearchTree({ item: null, value: 5 }))).toBe(
      true
    );
    expect(root.contains(new BinarySearchTree({ item: null, value: 1 }))).toBe(
      true
    );
    expect(root.contains(new BinarySearchTree({ item: null, value: 12 }))).toBe(
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
});
