# sample-react-ts-consumes-web-component

A sample React app, written in Typescript (using [create-react-app-typescript](https://github.com/wmonk/create-react-app-typescript)), that consumes [a web component](https://github.com/wes566/wc-menu-button)

1. Install the web component

```bash
npm install wc-menu-button --save
```

1. Add a script tag to [index.html](public/index.html)

```html
<script src="node_modules/wc-menu-button/dist/wc-menu-button.js"></script>
```

1. Add the element to your TSX

```tsx
render() {
  return (
    <div>
      <wc-menu-button></wc-menu-button>
    </div>
  );
}
```
