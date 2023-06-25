/**
 * This function takes in a callback code block and returns an object containing the returned data or error that was caught.
 * The advantages of using this function:
 * - clean up code by removing the need of try/catch blocks.
 * - allows the returned error to by casted to a particular type.
 * - run code and ignore errors
 * - constraining variables in logic within a block
 *
 * @param cb The callback function to resolve and return its response
 * @returns An object that contains the returned data or error.
 *
 * @example
 * ```typescript
 * import axios, { AxiosError } from 'axios';
 *
 * const { data, error } = withCatch<AxiosError>(async () => {
 *   const resp = await axios.get('http://example.com');
 *   return resp.data;
 * })
 *
 * error && console.error(error.response.status);
 * ```
 */
export function withCatch<E = Error, R = any>(cb: () => R): WithCatchReturn<E, R>;
export function withCatch<E = Error, R = any>(cb: () => Promise<R>): Promise<WithCatchReturn<E, R>>;
export function withCatch<E = Error, R = any>(
  cb: () => R | Promise<R>
): WithCatchReturn<E, R> | Promise<WithCatchReturn<E, R>> {
  try {
    const data = cb();
    if (data instanceof Promise) {
      return new Promise<WithCatchReturn<E, R>>((resolve) =>
        data.then((d) => resolve({ data: d })).catch((error) => resolve({ error }))
      );
    }
    return { data };
  } catch (error) {
    return { error };
  }
}

interface WithCatchReturn<E, R> {
  data?: R;
  error?: E;
}
