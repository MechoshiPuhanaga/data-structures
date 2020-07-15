import { BinaryHeap } from "./index";

type Value = { value: number };

let heap: BinaryHeap<number>;
let heapObj: BinaryHeap<Value>;

const comparatorMax = (a: number, b: number): boolean => a > b;
const comparatorMin = (a: number, b: number): boolean => a < b;

const comparatorMaxObj = (a: Value, b: Value): boolean => a.value > b.value;
const comparatorMinObj = (a: Value, b: Value): boolean => a.value < b.value;

describe("BinaryHeap", () => {
  describe("with number", () => {
    beforeEach(() => {
      heap = new BinaryHeap<number>(comparatorMin);
    });

    test("Constrictor creates right instance", () => {
      expect(heap).toBeInstanceOf(BinaryHeap);
      expect(heap).toHaveProperty("size", 0);
      // @ts-ignore
      expect(heap.values).toEqual([]);
    });

    test("Constrictor throws if no comparator has been provided", () => {
      expect.assertions(2);
      try {
        // @ts-ignore
        heap = new BinaryHeap<number>();
      } catch (error) {
        expect(error.message).toBe(
          "comparator should be function: Comparator<T> = (a: T, b: T) => boolean"
        );
      }
      expect(BinaryHeap).toThrow(Error);
    });

    test("insert", () => {
      heap.insert(1);
      expect(heap).toHaveProperty("size", 1);
      expect(heap.root()).toBe(1);
      heap.insert(-1);
      expect(heap).toHaveProperty("size", 2);
      expect(heap.root()).toBe(-1);
      heap.insert(-2);
      expect(heap).toHaveProperty("size", 3);
      expect(heap.root()).toBe(-2);
    });

    test("extract with sinkDown swaps", () => {
      heap.insert(1);
      heap.insert(2);
      heap.insert(3);
      heap.insert(7);
      heap.insert(4);
      heap.insert(100);

      expect(heap).toHaveProperty("size", 6);
      expect(heap.root()).toBe(1);

      expect(heap.extract()).toBe(1);
      expect(heap).toHaveProperty("size", 5);
      expect(heap.root()).toBe(2);

      expect(heap.extract()).toBe(2);
      expect(heap).toHaveProperty("size", 4);
      expect(heap.root()).toBe(3);

      expect(heap.extract()).toBe(3);
      expect(heap).toHaveProperty("size", 3);
      expect(heap.root()).toBe(4);

      expect(heap.extract()).toBe(4);
      expect(heap).toHaveProperty("size", 2);
      expect(heap.root()).toBe(7);

      expect(heap.extract()).toBe(7);
      expect(heap).toHaveProperty("size", 1);
      expect(heap.root()).toBe(100);

      expect(heap.extract()).toBe(100);
      expect(heap).toHaveProperty("size", 0);
      expect(heap.root()).toBeNull();

      expect(heap.extract()).toBeNull();
      expect(heap).toHaveProperty("size", 0);
      expect(heap.root()).toBeNull();
    });

    test("extract without sinkDown swaps", () => {
      heap.insert(1);
      heap.insert(1);
      heap.insert(1);
      heap.insert(1);
      heap.insert(1);
      heap.insert(1);

      expect(heap).toHaveProperty("size", 6);
      expect(heap.root()).toBe(1);

      expect(heap.extract()).toBe(1);
      expect(heap).toHaveProperty("size", 5);
      expect(heap.root()).toBe(1);

      expect(heap.extract()).toBe(1);
      expect(heap).toHaveProperty("size", 4);
      expect(heap.root()).toBe(1);

      expect(heap.extract()).toBe(1);
      expect(heap).toHaveProperty("size", 3);
      expect(heap.root()).toBe(1);

      expect(heap.extract()).toBe(1);
      expect(heap).toHaveProperty("size", 2);
      expect(heap.root()).toBe(1);
    });

    test("toString", () => {
      heap = new BinaryHeap<number>(comparatorMax);

      heap.insert(41);
      heap.insert(39);
      heap.insert(33);
      heap.insert(18);
      heap.insert(27);
      heap.insert(12);
      heap.insert(55);

      expect(heap.toString()).toBe("BinaryHeap 55,39,41,18,27,12,33");
    });
  });

  describe("with object", () => {
    beforeEach(() => {
      heapObj = new BinaryHeap<Value>(comparatorMinObj);
    });

    test("Constrictor creates right instance", () => {
      expect(heapObj).toBeInstanceOf(BinaryHeap);
      expect(heapObj).toHaveProperty("size", 0);
      // @ts-ignore
      expect(heapObj.values).toEqual([]);
    });

    test("Constrictor throws if no comparator has been provided", () => {
      expect.assertions(2);
      try {
        // @ts-ignore
        heapObj = new BinaryHeap<Value>();
      } catch (error) {
        expect(error.message).toBe(
          "comparator should be function: Comparator<T> = (a: T, b: T) => boolean"
        );
      }
      expect(BinaryHeap).toThrow(Error);
    });

    test("insert", () => {
      heapObj.insert({ value: 1 });
      expect(heapObj).toHaveProperty("size", 1);
      expect(heapObj.root()).toEqual({ value: 1 });
      heapObj.insert({ value: -1 });
      expect(heapObj).toHaveProperty("size", 2);
      expect(heapObj.root()).toEqual({ value: -1 });
      heapObj.insert({ value: -2 });
      expect(heapObj).toHaveProperty("size", 3);
      expect(heapObj.root()).toEqual({ value: -2 });
    });

    test("extract with sinkDown swaps", () => {
      heapObj.insert({ value: 1 });
      heapObj.insert({ value: 2 });
      heapObj.insert({ value: 3 });
      heapObj.insert({ value: 7 });
      heapObj.insert({ value: 4 });
      heapObj.insert({ value: 100 });

      expect(heapObj).toHaveProperty("size", 6);
      expect(heapObj.root()).toEqual({ value: 1 });

      expect(heapObj.extract()).toEqual({ value: 1 });
      expect(heapObj).toHaveProperty("size", 5);
      expect(heapObj.root()).toEqual({ value: 2 });

      expect(heapObj.extract()).toEqual({ value: 2 });
      expect(heapObj).toHaveProperty("size", 4);
      expect(heapObj.root()).toEqual({ value: 3 });

      expect(heapObj.extract()).toEqual({ value: 3 });
      expect(heapObj).toHaveProperty("size", 3);
      expect(heapObj.root()).toEqual({ value: 4 });

      expect(heapObj.extract()).toEqual({ value: 4 });
      expect(heapObj).toHaveProperty("size", 2);
      expect(heapObj.root()).toEqual({ value: 7 });

      expect(heapObj.extract()).toEqual({ value: 7 });
      expect(heapObj).toHaveProperty("size", 1);
      expect(heapObj.root()).toEqual({ value: 100 });

      expect(heapObj.extract()).toEqual({ value: 100 });
      expect(heapObj).toHaveProperty("size", 0);
      expect(heapObj.root()).toBeNull();

      expect(heapObj.extract()).toBeNull();
      expect(heapObj).toHaveProperty("size", 0);
      expect(heapObj.root()).toBeNull();
    });

    test("extract without sinkDown swaps", () => {
      heapObj.insert({ value: 1 });
      heapObj.insert({ value: 1 });
      heapObj.insert({ value: 1 });
      heapObj.insert({ value: 1 });
      heapObj.insert({ value: 1 });
      heapObj.insert({ value: 1 });

      expect(heapObj).toHaveProperty("size", 6);
      expect(heapObj.root()).toEqual({ value: 1 });

      expect(heapObj.extract()).toEqual({ value: 1 });
      expect(heapObj).toHaveProperty("size", 5);
      expect(heapObj.root()).toEqual({ value: 1 });

      expect(heapObj.extract()).toEqual({ value: 1 });
      expect(heapObj).toHaveProperty("size", 4);
      expect(heapObj.root()).toEqual({ value: 1 });

      expect(heapObj.extract()).toEqual({ value: 1 });
      expect(heapObj).toHaveProperty("size", 3);
      expect(heapObj.root()).toEqual({ value: 1 });

      expect(heapObj.extract()).toEqual({ value: 1 });
      expect(heapObj).toHaveProperty("size", 2);
      expect(heapObj.root()).toEqual({ value: 1 });
    });

    test("toString", () => {
      heapObj = new BinaryHeap<Value>(comparatorMaxObj);

      heapObj.insert({ value: 41 });
      heapObj.insert({ value: 39 });
      heapObj.insert({ value: 33 });
      heapObj.insert({ value: 18 });
      heapObj.insert({ value: 27 });
      heapObj.insert({ value: 12 });
      heapObj.insert({ value: 55 });

      expect(heapObj.toString()).toBe(
        "BinaryHeap [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
      );
    });
  });
});
