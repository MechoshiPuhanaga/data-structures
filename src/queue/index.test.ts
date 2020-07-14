import { Queue } from "./index";

let queue: Queue<number>;

describe("Queue", () => {
  beforeEach(() => {
    queue = new Queue<number>();
  });

  test("Constrictor creates right instance", () => {
    expect(queue).toBeInstanceOf(Queue);
    expect(queue).toHaveProperty("head", null);
    expect(queue).toHaveProperty("size", 0);
    expect(queue).toHaveProperty("tail", null);
  });

  test("is iterable", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect([...queue]).toEqual([1, 2, 3]);
  });

  test("enqueue", () => {
    queue.enqueue(1);
    expect(queue).toHaveProperty("size", 1);
    expect(queue.head).toHaveProperty("value", 1);

    queue.enqueue(2);
    expect(queue).toHaveProperty("size", 2);
    expect(queue.tail).toHaveProperty("value", 2);
  });

  test("dequeue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    let value = queue.dequeue();
    expect(value).toBe(1);
    expect(queue).toHaveProperty("size", 2);
    expect(queue.head).toHaveProperty("value", 2);

    value = queue.dequeue();
    expect(value).toBe(2);
    expect(queue).toHaveProperty("size", 1);
    expect(queue.head).toHaveProperty("value", 3);

    value = queue.dequeue();
    expect(value).toBe(3);
    expect(queue).toHaveProperty("size", 0);
    expect(queue).toHaveProperty("head", null);
    expect(queue).toHaveProperty("tail", null);

    value = queue.dequeue();
    expect(value).toBeNull();
  });

  test("toString", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue).toHaveProperty("size", 3);
    expect(queue.toString()).toBe("queue<1,2,3>");
  });
});
