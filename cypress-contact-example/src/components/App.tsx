import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import * as React from "react";
import Routes from "../routes";

// Any additional component props go here.
interface IOwnProps {
  history: History;
}

// Create an intersection type of the component props and our Redux props.
type AllProps = IOwnProps;

class App extends React.Component<AllProps> {
  public render() {
    const { history } = this.props;

    return (
      <ConnectedRouter history={history}>
        <div id="container">
          <main id="content">
            <Routes />
          </main>
        </div>
      </ConnectedRouter>
    );

  }
}

export default App;
