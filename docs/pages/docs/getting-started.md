# Getting Started

## Install Package

To install the **Weebu Web Kit** library, simply do the following:

`npm install @weebuinc/web-kit`

## Import Into Project

To import the different utilities into your project, do the following

### ES6/Typescript Import

```typescript
import { camel, kebab } from '@weebuinc/web-kit';

export function toCase(value, type) {
  if (type === 'camel') {
    return camel(value);
  }

  if (type === 'kebab') {
    return kebab(value);
  }

  return value;
}
```

### ES5 Import

```javascript
var kit = require('@weebuinc/web-kit');
var camel = kit.camel;
var kebab = kit.kebab;

module.exports = {
  toCase: function (value, type) {
    if (type === 'camel') {
      return camel(value);
    }

    if (type === 'kebab') {
      return kebab(value);
    }

    return value;
  }
};
```
