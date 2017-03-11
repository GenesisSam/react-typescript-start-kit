import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as createLogger from "redux-logger";

const WebFontLoader = require("webfontloader");

// Material ui
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RootRoutes from "./rootRoutes";

// reducers
import { rootReducer } from "./rootReducer";

let store;

initialFontLoader();

if (process.env.NODE_ENV === "production") {
  store = createStore(rootReducer, applyMiddleware(
      thunk, // lets us dispatch() functions
  ));
} else {
  const loggerMiddleWare = createLogger();
  store = createStore(rootReducer, applyMiddleware(
      thunk, // lets us dispatch() functions
      loggerMiddleWare, // neat middleware that logs actions
  ));
}

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <RootRoutes />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root"),
);

function initialFontLoader() {
  const WebConfig = {
    google: {
      families: ["Roboto"],
    },
    custom: {
      urls: ["http://fonts.googleapis.com/earlyaccess/nanumgothic.css",
      "http://fonts.googleapis.com/earlyaccess/nanumgothiccoding.css"],
    },
  };

  WebFontLoader.load(WebConfig);
}
