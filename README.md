# sample-react-ts-consumes-web-component

A sample React app, written in Typescript (using [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript)), that consumes [a web component](https://github.com/wes566/wc-menu-button).

The [master](https://github.com/wes566/sample-react-ts-consumes-web-component/tree/master) branch uses NPM and `defineCustomElements` to install the web component, and the [script-tag](https://github.com/wes566/sample-react-ts-consumes-web-component/tree/script-tag) branch uses a `<script>` tag to install the web component.

## [Demo](https://react-ts-web-component.netlify.com)

## Steps to consume the web component in react typescript app

1. Add a script tag in the [index.html](public/index.html) file.

```html
<script src="https://unpkg.com/wc-menu-button/dist/wc-menu-button.js"></script>
```

2. Declare your web component typings (you can use [a declarations file](src/declarations.d.ts)) so TS doesn't complain when you use it in your TSX code.

```ts
declare namespace JSX {
  interface IntrinsicElements {
    "wc-menu-button": any;
  }
}
```

3. Add the element to your TSX

```tsx
render() {
  return (
    <div>
      <wc-menu-button></wc-menu-button>
    </div>
  );
}
```

This is simplified, to see how to get a ref to the web component (so you can listen to events or set properties) see [the source code](src/App.tsx).
