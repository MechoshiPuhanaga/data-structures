import { Stack } from './index';

let stack: Stack<number>;

describe('Stack', () => {
  beforeEach(() => {
    stack = new Stack<number>();
  });

  test('Constrictor creates right instance', () => {
    expect(stack).toBeInstanceOf(Stack);
    expect(stack).toHaveProperty('head', null);
    expect(stack).toHaveProperty('size', 0);
  });

  test('is iterable', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect([...stack]).toEqual([3, 2, 1]);
  });

  test('push', () => {
    stack.push(1);
    expect(stack).toHaveProperty('size', 1);
    expect(stack.head).toHaveProperty('value', 1);

    stack.push(2);
    expect(stack).toHaveProperty('size', 2);
    expect(stack.head).toHaveProperty('value', 2);
  });

  test('pop', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    let value = stack.pop();
    expect(value).toBe(3);
    expect(stack).toHaveProperty('size', 2);
    expect(stack.head).toHaveProperty('value', 2);

    value = stack.pop();
    expect(value).toBe(2);
    expect(stack).toHaveProperty('size', 1);
    expect(stack.head).toHaveProperty('value', 1);

    value = stack.pop();
    expect(value).toBe(1);
    expect(stack).toHaveProperty('size', 0);
    expect(stack).toHaveProperty('head', null);

    value = stack.pop();
    expect(value).toBeNull();
  });

  test('toString', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack).toHaveProperty('size', 3);
    expect(stack.toString()).toBe('Stack <3,2,1>');
  });
});
