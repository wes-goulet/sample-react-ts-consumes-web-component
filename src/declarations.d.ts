// Since wc-menu-button was built with StencilJS and has typings I
// should be able to use the types in theory, but since my component
// is an HTMLElement it has to use dash-casing, so any multi-word props
// have the wrong type names... example: "isOpen" is the type, but when
// I set that attribute in react JSX I have to use "is-open", so the types
// don't line up.  For now I'm just using "any" :(
declare namespace JSX {
  interface IntrinsicElements {
    "wc-menu-button": any;
  }
}
