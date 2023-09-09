import wait from './wait';

describe('wait unit tests', () => {
  it('wait for the default period of 1 second', async () => {
    const start = new Date().getTime();
    await wait();
    const stop = new Date().getTime();

    const diff = stop - start;

    expect(diff).toBeGreaterThanOrEqual(1000);
    expect(diff).toBeLessThanOrEqual(1050);
  }, 2000);
  it('wait for the specified period of 3 second', async () => {
    const start = new Date().getTime();
    await wait(3000);
    const stop = new Date().getTime();

    const diff = stop - start;

    expect(diff).toBeGreaterThanOrEqual(3000);
    expect(diff).toBeLessThanOrEqual(3050);
  }, 4000);
});
