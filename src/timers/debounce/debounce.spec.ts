import { debounce } from './debounce';
import { wait } from '../wait';

describe('debounce unit tests', () => {
  it('call debounce callback once after multiple dispatch calls', async () => {
    const cb = jest.fn();
    const bounce = debounce(cb);
    for (let i = 0; i < 10; i++) {
      bounce();
    }
    await wait(350);
    expect(cb).toBeCalledTimes(1);
  });

  it('call debounce callback with parameters passed to it', async () => {
    const expected = { name: 'Jane Doe', age: 30 };
    const cb = jest.fn((name: string, age: number) => {});
    const bounce = debounce(cb);
    bounce(expected.name, expected.age);
    await wait(350);
    expect(cb).toBeCalledWith(expected.name, expected.age);
  });
});
