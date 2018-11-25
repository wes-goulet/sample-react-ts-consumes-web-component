// Since wc-menu-button was built with StencilJS and has typings I
// can use them here, but if the web component didn't have typings you
// could use the "any" type
import { Components } from "wc-menu-button/dist/types/components";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wc-menu-button": React.ClassAttributes<Components.WcMenuButton>;
    }
  }
}
