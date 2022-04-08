import React, { useCallback, useEffect, useState } from "react";
import Layout from "./Layout";
import { useParams, useNavigate } from "react-router-dom";
import WelcomePage from "./../pages/WelcomePage";
import { useAppDispatch } from "./../features/hooks";
import { saveAuth } from "../features/auth/save-auth-slice";

function MainContainer() {
  const [isAuthenticated, setAuthenticationState] = useState(false);
  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  const urlSearchParams = new URLSearchParams(window.location.search);
  const { authToken } = Object.fromEntries(urlSearchParams.entries());

  const asyncCallback = useCallback(
    () =>
      new Promise((resolve) => {
        const payload = { accessToken: authToken };
        dispatch(saveAuth(payload));
        resolve(payload);
      }),
    []
  );

  useEffect(() => {
    if (authToken) {
      // Validate the token by API call and set this to true if valid
      setAuthenticationState(true);
      asyncCallback()
        .then(() => navigate("/dashboard", { replace: true }))
        .catch((error) => console.log(error));
    }
  }, [authToken]);

  return (
    <div>
      <div>{!isAuthenticated && <WelcomePage />}</div>
      <div>{isAuthenticated && <Layout />}</div>
    </div>
  );
}

export default MainContainer;
