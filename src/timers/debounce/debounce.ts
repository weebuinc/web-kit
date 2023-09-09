/**
 * This function returns a debounce function of a callback that is passed to it.
 * @param cb the callback function to debounce
 * @param timeout the wait period (in milliseconds) for the debounce (defaults to 300 milliseconds)
 * @returns
 */
export function debounce<C extends DebounceCallback>(cb: C, timeout = 300): DebounceDispatch<C> {
  const state = { handle: null as NodeJS.Timeout };
  return (...params: Parameters<typeof cb>) => {
    clearTimeout(state.handle);
    state.handle = setTimeout(() => {
      cb(...params);
    });
  };
}
export default debounce;

type DebounceCallback = (...args) => Awaited<any>;
type DebounceDispatch<C extends DebounceCallback> = (...params: Parameters<C>) => Awaited<void>;
