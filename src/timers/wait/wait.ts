/** This function returns a void promise that resolves after 1 second. */
export function wait(): Promise<void>;
/**
 * This function returns a void promise that resolves after a specified amount of time.
 * @param { number } milliseconds the amount of time (in milliseconds) that the promise will wait before resolving
 */
export function wait(milliseconds: number): Promise<void>;
export function wait(milliseconds = 1000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export default wait;
