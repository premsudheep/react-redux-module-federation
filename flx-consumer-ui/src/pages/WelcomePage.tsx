import React, { useState } from "react";

const FlxButton = React.lazy(() => import("flx_commons_ui/FlxButton"));

function WelcomePage() {
  const handleLogin = () => {
    window.location.href = `http://localhost:3001`;
  };

  const handleApply = () => {
    console.log("Redirect to Apply flow");
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-900">
      <div className="bg-gray-600 p-20">
        <h1 className="text- p-5 text-center text-2xl text-white">
          Welcome to the Flexiti Customer UI
        </h1>
        <div className="rounded-m row-auto flex flex-row items-center space-x-10">
          <div className="flex flex-col space-y-5">
            <h1 className="text-gray-300">Do you have account with Flexiti?</h1>
            <FlxButton buttonLabel={"Login"} handleSubmit={handleLogin} />
          </div>
          <div className="flex flex-col space-y-5">
            <h1 className="text-gray-300">Sign up for Flexiti products</h1>
            <FlxButton buttonLabel={"Apply"} handleSubmit={handleApply} />
          </div>
        </div>
        <div className="flex items-center justify-center pt-10 text-white">
          <span className="cursor-pointer underline">Register card</span>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
