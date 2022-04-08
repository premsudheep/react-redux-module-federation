import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import LoginPage from "./pages/LoginPage";
import { Provider } from "react-redux";

import "./index.scss";
import { store } from "./features/store";
import { BrowserRouter } from "react-router-dom";
import SafeCompoennet from "./components/SafeComponent";

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <SafeCompoennet>
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    </SafeCompoennet>
  </Suspense>
);
ReactDOM.render(<App />, document.getElementById("app"));
