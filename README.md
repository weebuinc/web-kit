# Web Kit
A library of functions and utilities to simplify the web development process.<br/>

## Getting Started

Getting setup is a snap. <br/>

### Download the web-kit library.

```text
npm install @weebuinc/web-kit
```

### Import functions into your project.

```typescript
import { wait } from '@weebuinc/web-kit';

export async function waitForSeconds(seconds: number) {
  await wait(seconds * 1000);
}
```

<br/>

## Functions

### Parsers
<table style={{ textAlign: 'left', verticalAlign: 'top', width: '100%' }}>
  <thead>
    <tr>
      <th>Name</th>
      <th style={{ width: '100%' }}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>argumenter</td>
      <td>
      This function that can take parameters, in any order, and returns a class that parses the values by type.

      ```typescript
      interface Argumenter {
        array: Array<any>;
        boolean: boolean;
        function: Function;
        instance<T>(type: { new (...args): T } | (Function & { prototype: T })): T;
        nil: null;
        null: null;
        number: number;
        object: Object;
        string: string;
        symbol: symbol;
      }
      function argumenter(...args): Argumenter;
      ```
      </td>
    </tr>
  </tbody>
</table>

<br/>

### Reducers
<table style={{ textAlign: 'left', verticalAlign: 'top', width: '100%' }}>
  <thead>
    <tr>
      <th>Name</th>
      <th style={{ width: '100%' }}>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>withCatch</td>
    <td>
    This function wraps a callback code block and returns an object containing either the returned value of the callback or the error thrown by it.

    ```typescript
    interface WithCatchReturn<E, R> {
      result?: R;
      error?: E;
    }

    export function withCatch<E = Error, R = any>(cb: () => R): WithCatchReturn<E, R>;
    export function withCatch<E = Error, R = any>(cb: () => Promise<R>): Promise<WithCatchReturn<E, R>>;
    ```
    </td>
  </tr>
  </tbody>
</table>

<br/>

### Timers
<table style={{ textAlign: 'left', verticalAlign: 'top', width: '100%' }}>
  <thead>
    <tr>
      <th>Name</th>
      <th style={{ width: '100%' }}>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>debounce</td>
    <td>
    This function accepts a callback and returns a dispatch that debounces the callback.

    ```typescript
    type DebounceCallback = (...args) => Awaited<any>;
    type DebounceDispatch<C extends DebounceCallback> = (...params: Parameters<C>) => Awaited<void>;

    export function debounce<C extends DebounceCallback>(cb: C): DebounceDispatch<C>;
    export function debounce<C extends DebounceCallback>(cb: C, timeout: number): DebounceDispatch<C>;
    ```
    </td>
  </tr>
  <tr>
    <td>epoch</td>
    <td>
    This function returns the unix epoch timestamp for the current time

    ```typescript
    export function epoch(): number;
    ```
    </td>
  </tr>
  <tr>
    <td>lapse</td>
    <td>
    This function returns another function that calculates the lapse period of time in-between its subsequent calls

    ```typescript
    type TimeUnit = 'milliseconds' | 'ms' | 'seconds' | 's' | 'minutes' | 'm' | 'hours' | 'h' | 'days' | 'd';
    type Lap = (unit?: TimeUnit) => number;
    export function lapse(unit: TimeUnit = 'ms'): Lap;
    ```
    </td>
  </tr>
  <tr>
    <td>wait</td>
    <td>
    This function returns a void promise that resolves after a specified amount of time.

    ```typescript
    export function wait(): Promise<void>;
    export function wait(milliseconds: number): Promise<void>;
    ```
    </td>
  </tr>
  </tbody>
</table>

<br/>

### Transformers
<table style={{ textAlign: 'left', verticalAlign: 'top', width: '100%' }}>
  <thead>
    <tr>
      <th>Name</th>
      <th style={{ width: '100%' }}>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>camel</td>
    <td>
    This function takes an input string and converts it to camel case.

    ```typescript
    export function camel(value: string): string;
    ```
    </td>
  </tr>
  <tr>
    <td>kebab</td>
    <td>
    This function takes an input string and converts it to kebab case.

    ```typescript
    export function kebab(value: string): string;
    ```
    </td>
  </tr>
  <tr>
    <td>snake</td>
    <td>
    This function takes an input string and converts it to snake case.

    ```typescript
    export function snake(value: string): string
    ```
    </td>
  </tr>
  </tbody>
</table>