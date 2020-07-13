import { SinglyLinkedList } from "./index";

let sll: SinglyLinkedList<number>;

describe("SinglyLinkedList", () => {
  beforeEach(() => {
    sll = new SinglyLinkedList<number>();
  });

  test("Constrictor creates right instance", () => {
    expect(sll).toBeInstanceOf(SinglyLinkedList);
    expect(sll).toHaveProperty("head", null);
    expect(sll).toHaveProperty("size", 0);
    expect(sll).toHaveProperty("tail", null);
  });

  test("is iterable", () => {
    sll.push(1);
    sll.push(2);
    sll.push(3);

    expect([...sll]).toEqual([1, 2, 3]);
  });

  test("static fromArray", () => {
    sll = SinglyLinkedList.fromArray([1, 2, 3]);

    expect(sll.toString()).toBe("1->2->3");
  });

  test("push", () => {
    sll.push(1);
    expect(sll).toHaveProperty("size", 1);
    expect(sll.head).toHaveProperty("value", 1);
    expect(sll.tail).toHaveProperty("value", 1);

    sll.push(2);
    expect(sll).toHaveProperty("size", 2);
    expect(sll.head).toHaveProperty("value", 1);
    expect(sll.tail).toHaveProperty("value", 2);
  });

  test("pop", () => {
    sll.push(1);
    sll.push(2);
    sll.push(3);

    let node = sll.pop();
    expect(node).toBe(3);
    expect(sll).toHaveProperty("size", 2);
    expect(sll.head).toHaveProperty("value", 1);
    expect(sll.tail).toHaveProperty("value", 2);

    node = sll.pop();
    expect(node).toBe(2);
    expect(sll).toHaveProperty("size", 1);
    expect(sll.head).toHaveProperty("value", 1);
    expect(sll.tail).toHaveProperty("value", 1);

    node = sll.pop();
    expect(node).toBe(1);
    expect(sll).toHaveProperty("size", 0);
    expect(sll).toHaveProperty("head", null);
    expect(sll).toHaveProperty("tail", null);

    node = sll.pop();
    expect(node).toBe(null);
  });

  test("unshift", () => {
    sll.unshift(1);
    expect(sll).toHaveProperty("size", 1);
    expect(sll.head).toHaveProperty("value", 1);
    expect(sll.tail).toHaveProperty("value", 1);

    sll.unshift(2);
    expect(sll).toHaveProperty("size", 2);
    expect(sll.head).toHaveProperty("value", 2);
    expect(sll.tail).toHaveProperty("value", 1);
  });

  test("shift", () => {
    sll.unshift(1);
    sll.unshift(2);

    let node = sll.shift();
    expect(node).toBe(2);
    expect(sll).toHaveProperty("size", 1);
    expect(sll.head).toHaveProperty("value", 1);
    expect(sll.tail).toHaveProperty("value", 1);

    node = sll.shift();
    expect(node).toBe(1);
    expect(sll).toHaveProperty("size", 0);
    expect(sll).toHaveProperty("head", null);
    expect(sll).toHaveProperty("tail", null);

    node = sll.shift();
    expect(node).toBe(null);
  });

  test("toString", () => {
    sll.push(1);
    sll.push(2);
    sll.push(3);

    expect(sll).toHaveProperty("size", 3);
    expect(sll.toString()).toBe("1->2->3");
  });

  test("get", () => {
    sll.push(1);
    sll.push(2);
    sll.push(3);

    expect(sll.get(-1)).toBe(null);
    expect(sll.get(3)).toBe(null);

    expect(sll.get(0)).toBe(1);
    expect(sll.get(1)).toBe(2);
    expect(sll.get(2)).toBe(3);
  });

  test("insert", () => {
    sll.push(1);
    sll.push(2);
    sll.push(3);

    expect(sll.insert(4, -1)).toBe(false);
    expect(sll.insert(4, 4)).toBe(false);

    expect(sll.insert(4, 3)).toBe(true);
    expect(sll).toHaveProperty("size", 4);
    expect(sll.toString()).toBe("1->2->3->4");

    expect(sll.insert(0, 0)).toBe(true);
    expect(sll).toHaveProperty("size", 5);
    expect(sll.toString()).toBe("0->1->2->3->4");

    expect(sll.insert(7, 2)).toBe(true);
    expect(sll).toHaveProperty("size", 6);
    expect(sll.toString()).toBe("0->1->7->2->3->4");
  });

  test("remove", () => {
    sll.push(1);
    sll.push(2);
    sll.push(3);

    expect(sll.remove(-1)).toBe(null);
    expect(sll.remove(4)).toBe(null);

    expect(sll.remove(1)).toBe(2);
    expect(sll).toHaveProperty("size", 2);

    expect(sll.remove(1)).toBe(3);
    expect(sll).toHaveProperty("size", 1);

    expect(sll.remove(0)).toBe(1);
    expect(sll).toHaveProperty("size", 0);
  });

  test("set", () => {
    sll.push(1);
    sll.push(2);
    sll.push(3);

    expect(sll.set(7, -1)).toBe(false);
    expect(sll.set(7, 3)).toBe(false);

    expect(sll.set(7, 2)).toBe(true);
    expect(sll.tail).toHaveProperty("value", 7);

    expect(sll.set(7, 0)).toBe(true);
    expect(sll.head).toHaveProperty("value", 7);

    expect(sll).toHaveProperty("size", 3);
  });

  test("reverse", () => {
    sll.push(1);
    expect(sll.reverse().toString()).toBe("1");

    sll.push(2);
    sll.push(3);
    sll.push(4);
    sll.push(5);

    expect(sll.toString()).toBe("1->2->3->4->5");

    sll.reverse();
    expect(sll.toString()).toBe("5->4->3->2->1");
  });
});
