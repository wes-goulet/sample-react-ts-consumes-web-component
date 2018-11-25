import * as React from "react";
import { Components } from "wc-menu-button/dist/types/components";
import "./App.css";

// tslint:disable-next-line:no-empty-interface
interface IComponentProps {}

interface IComponentState {
  menuIsOpen: boolean;
}

class App extends React.Component<IComponentProps, IComponentState> {
  constructor(props: IComponentProps) {
    super(props);

    this.state = {
      menuIsOpen: false
    };
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <wc-menu-button
            ref={(menuButton: Components.WcMenuButton) => {
              if (menuButton) {
                menuButton.isOpenChangedFunc = this.handleMenuOpenChanged;
              }
            }}
          />
          <h1 className="App-title">
            React (typescript) app consuming a web component
          </h1>
        </header>
        <p className="App-intro">
          The menu is {this.state.menuIsOpen ? "open" : "closed"}
        </p>
      </div>
    );
  }

  private handleMenuOpenChanged = (isOpen: boolean) => {
    this.setState({ ...this.state, menuIsOpen: isOpen });
  };
}

export default App;
