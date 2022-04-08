import React, { useEffect, useState } from "react";
import {
  getAuthToken,
  iLoginAuthCredentials,
} from "../features/auth/auth-thunk-slice";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import { useValidateCustomerLoginMutation } from "../features/login/login-slice";
import { useNavigate } from "react-router-dom";

const FlxInput = React.lazy(() => import("flx_commons_ui/FlxInput"));
const FlxButton = React.lazy(() => import("flx_commons_ui/FlxButton"));

const LoginPage: React.FC = () => {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [callBack, setCallBack] = useState<string>("");

  //const [fetchToken, { isLoading }] = useValidateCustomerLoginMutation();
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.authSlice);

  let navigate = useNavigate();

  useEffect(() => {
    console.log("LoginPage.state", authState);
    if (
      authState &&
      authState?.status === "success" &&
      authState?.data.access_token
    ) {
      console.log("LoginPage.token", authState?.data.access_token);
      window.location.href = `http://localhost:3000?authToken=${authState?.data.access_token}`;
    }
  }, [authState]);

  const handleUserNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    setUserName(event.target.value);
  };
  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    setPassword(event.target.value);
  };
  const handleSubmit = async () => {
    //await fetchToken({ username, password });
    try {
      dispatch(getAuthToken({ username, password }));
    } catch (error) {
      console.log("Error while posting login payload", error);
    } finally {
      setUserName("");
      setPassword("");
    }
  };
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-500">
      <div className="border-1 flex flex-col items-center justify-center space-y-4 rounded-md bg-gray-700 p-5">
        <h1 className="text- p-5 text-center text-xl text-white">
          Sign in to your Flexiti Customer Account
        </h1>
        <FlxInput
          type={"text"}
          placeholder={"username"}
          value={username}
          handleOnChange={handleUserNameChange}
        />
        <FlxInput
          type={"password"}
          placeholder={"password"}
          value={password}
          handleOnChange={handlePasswordChange}
        />
        <div className="flex flex-row space-x-10">
          <div className="flex flex-row items-center justify-start space-x-2">
            <input
              className="flex items-center justify-center pt-3"
              type="checkbox"
            />
            <span className="text-md text-gray-400">{" Remember me "}</span>
          </div>
          <div>
            <FlxButton buttonLabel={"Sign in"} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
