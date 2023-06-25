/**
 * This function returns the unix epoch timestamp for the current time
 * @returns {number} unix epoch timestamp
 */
export function epoch(): number {
  return new Date().getTime();
}

export default epoch;
