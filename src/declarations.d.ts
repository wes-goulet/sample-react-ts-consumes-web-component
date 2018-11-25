import { Components } from "wc-menu-button/dist/types/components";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wc-menu-button": React.ClassAttributes<Components.WcMenuButton>;
    }
  }
}
