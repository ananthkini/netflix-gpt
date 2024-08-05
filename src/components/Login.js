import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white roundd-lg bg-opacity-80">
        <h1 className="font-bold text-3xl p-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full name"
            className="p-4 m-4 w-full bg-gray-700 outline-none"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 m-4 w-full bg-gray-700 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-4 w-full bg-gray-700 outline-none"
        />
        <button className="p-4 m-4 bg-red-700 w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <h4 className="p-4 m-4" onClick={toggleSignIn}>
          {isSignIn ? "New user? Sign up now" : "Already registered? Sign In"}
        </h4>
      </form>
    </div>
  );
};

export default Login;
