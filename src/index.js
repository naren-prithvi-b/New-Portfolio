import React from "react";
import ReactDOM from "react-dom";  // <-- change here
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/font-awesome/css/all.css";

const engine = new Styletron();

ReactDOM.render(    // <-- change here
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>,
  document.getElementById("root")   // <-- pass root DOM element here
);

serviceWorker.unregister();
