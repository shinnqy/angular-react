/**
 * Gets the data attributes on an `HTMLElement`.
 *
 * @example
```keepDataPrefix === false```:
```html
<div data-service="Foo" data-service-type="bar"></div> -> { 'service': 'Foo', 'service-type': 'Bar' }
```

```keepDataPrefix === true```:
```html
<div data-service="Foo" data-service-type="bar"></div> -> { 'data-service': 'Foo', 'data-service-type': 'Bar' }
```
 */
export declare function getDataAttributes<T extends HTMLElement>(element: T, keepDataPrefix?: boolean): Record<string, string>;
