# sample-react-ts-consumes-web-component

A sample React app, written in Typescript (using [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript)), that consumes [a web component](https://github.com/wes566/wc-menu-button).

## [Demo](https://react-ts-web-component.netlify.com)

## Steps to consume the web component in react typescript app

1. NPM install the web component

```bash
npm install wc-menu-button --save
```

2. Add a call to `defineCustomElements` in the [index.tsx](src/index.tsx) file.

```tsx
import { defineCustomElements } from "test-components/dist/loader";
.
.
.
defineCustomElements(window);
```

3. Declare your web component typings (you can use [a declarations file](src/declarations.d.ts)) so TS doesn't complain when you use it in your TSX code.

```ts
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wc-menu-button": React.ClassAttributes<Components.WcMenuButton>;
    }
  }
}
```

4. Add the element to your TSX

```tsx
render() {
  return (
    <div>
      <wc-menu-button></wc-menu-button>
    </div>
  );
}
```
