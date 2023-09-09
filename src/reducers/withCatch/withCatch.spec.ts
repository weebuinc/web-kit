import { withCatch } from './withCatch';

describe('withCatch unit tests', () => {
  it('resolve synchronous callback without error', () => {
    const expected = 30;
    const { result, error } = withCatch(() => expected);
    expect(result).toBe(expected);
    expect(error).toBeUndefined();
  });

  it('resolve synchronous callback with error', () => {
    const expected = new Error('test error');
    const { result, error } = withCatch(() => {
      throw expected;
    });
    expect(result).toBeUndefined();
    expect(error).toEqual(expected);
  });

  it('resolve asynchronouse callback without error', async () => {
    const expected = 'Jane Doe';
    const { result, error } = await withCatch(
      () =>
        new Promise<string>((resolve) => {
          setTimeout(() => resolve(expected), 300);
        })
    );
    expect(result).toBe(expected);
    expect(error).toBeUndefined();
  });

  it('resolve asynchronouse callback with error', async () => {
    const expected = new Error('test error');
    const { result, error } = await withCatch(
      () =>
        new Promise<string>((resolve, reject) => {
          setTimeout(() => reject(expected), 300);
        })
    );
    expect(result).toBeUndefined();
    expect(error).toEqual(expected);
  });
});
