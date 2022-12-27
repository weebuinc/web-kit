## Timers
These functions deal with time based capabilities.

### epoch
The epoch function returns a unix timestamp of the current or specified date

**signatures**
```typescript
export function epoch(): number;
export function epoch(date: Date): number;
```

**parameters**
<arguments>
  <arg name="date" type="Date" value="new Date()">
    the date that is used to provide the epoch timestamp
  </arg>
</arguments>

**examples**
```typescript
import { epoch } from '@weebuinc/web-kit';

function run() {
  return new Promise<number>((resolve) => {
    const start = epoch();
    setTimeout(() => {
      resolve(epoch() - start);
    }, 1000 + Math.random() * 1000)
  });
}
```

### wait
<hr />
The wait function returns a promise that resolves after a specified period of time.

**signatures**
```typescript
export function wait(): Promise<void>;
export function wait(milliseconds: number): Promise<void>;
```

**parameters**
<arguments>
  <arg name="milliseconds" type="Number" value="1000">
    the amount of time (in milliseconds) that the promise will wait before resolving
  </arg>
</arguments>

**examples**
```typescript
import { wait } from '@weebuinc/web-kit';

async function run() {
  await wait(2000);
}
```