import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
const LoginPage = React.lazy(() => import("flx_authentication_ui/LoginPage"));
import SafeCompoennet from "./components/SafeComponent";
import { Provider } from "react-redux";
import { store } from "./features/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import MainContainer from "./components/MainContainer";

const App = () => (
  <div>
    <BrowserRouter>
      <SafeCompoennet>
        <Suspense fallback={<div>Loading...</div>}>
          <Provider store={store}>
            {/* <LoginPage /> */}
            <MainContainer />
          </Provider>
        </Suspense>
      </SafeCompoennet>
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
