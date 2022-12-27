/**
 * This function returns the unix epoch timestamp for the current time
 * @returns {number} unix epoch timestamp
 */
export function epoch(): number;
/**
 * This function returns the unix epoch timestamp for a specified time
 * @param {Date} date the date that is used to provide the epoch timestamp
 * @returns {number} unix epoch timestamp
 */
export function epoch(date: Date): number;
export function epoch(date = new Date()): number {
  return date.getTime();
}

export default epoch;
