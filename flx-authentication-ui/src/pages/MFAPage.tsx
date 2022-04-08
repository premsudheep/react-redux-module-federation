import React, { useState } from "react";

function MFA() {
  const [securityCode, setSecurityCode] = useState("");

  const handleSecurityCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSecurityCode(event.target.value);
  };

  const handleSubmit = () => {
    console.log("security code", securityCode);
  };
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-500">
      <div className="border-1 flex flex-col items-center justify-center space-y-4 rounded-md bg-gray-700 p-10">
        <h1 className="text- p-5 text-center text-xl text-white">
          Let's confirm your identity
        </h1>
        <p className="text-gray-200">
          Protecting your information is our top priority. Please confirm your
          account by entering the authorization code sent to *** - *** - 1111
        </p>
        <div className="flex">
          <input
            className="rounded-sm bg-gray-400 p-2 outline-none"
            type="text"
            placeholder="username"
            value={securityCode}
            onChange={handleSecurityCodeChange}
          />
        </div>
        <p className="text-gray-200">
          It may take 2 mintues to receive token? resend token
        </p>
        <div className="flex">
          <button
            type="submit"
            className="rounded-sm bg-pink-600 pb-2 pr-3 pt-2 pl-3 font-bold text-gray-800"
            onClick={() => handleSubmit()}
          >
            Continue
          </button>
        </div>
        <p className="text-gray-200">
          Don't have your device?{" "}
          <a className="underline" href="/login/mfa">
            Use alternate method
          </a>
        </p>
      </div>
    </div>
  );
}

export default MFA;
