import { TimeUnit } from '../types';
import { epoch } from './epoch';

/**
 * This function returns another function that calculates the lapse period of time in-between its subsequent calls
 * @param unit the unit of time used to represent the lapsed period
 * @example
 * ```typescript
 * import { lapse, wait } from '@weebu/web-kit';
 *
 * const lap = lapse();
 * await wait(5000);
 * lap() // returns 5000
 *
 * await wait(1200);
 * lap() // returns 1200
 * ```
 */
export function lapse(unit: TimeUnit = 'ms'): (unit?: TimeUnit) => number {
  const state = { milliseconds: epoch() };
  return (u: TimeUnit = unit) => {
    const { milliseconds } = state;
    state.milliseconds = epoch();
    const period = state.milliseconds - milliseconds;

    switch (u) {
      case 's':
      case 'seconds':
        return period / 1000;
      case 'm':
      case 'minutes':
        return period / (60 * 1000);
      case 'h':
      case 'hours':
        return period / (60 * 60 * 1000);
      case 'd':
      case 'days':
        return period / (24 * 60 * 60 * 1000);
      default:
        return period;
    }
  };
}

export default lapse;
