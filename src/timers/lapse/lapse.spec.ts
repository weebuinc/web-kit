import { lapse } from './lapse';
import { wait } from '../wait';

describe('lapse unit tests', () => {
  it('lap with default lapse in milliseconds', async () => {
    const lap = lapse();
    await wait(300);
    const result = lap();
    expect(result).toBeGreaterThanOrEqual(300);
    expect(result).toBeLessThan(350);
  });
  it('lap with lapse in seconds', async () => {
    const lap = lapse('seconds');
    await wait(300);
    const result = lap();
    expect(result).toBeGreaterThanOrEqual(0.3);
    expect(result).toBeLessThan(0.35);
  });
});
