import React, { useRef, useState } from "react";
import Header from "./Header";
import Body from "./Body";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage("");
  };

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleValidateData = (e) => {
    e.preventDefault();
    //validate data
    let message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          errorCode === "auth/invalid-credential"
            ? setErrorMessage("Invalid username or password")
            : setErrorMessage("");
          console.log(errorCode, " - ", errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          errorCode === "auth/email-already-in-use"
            ? setErrorMessage("Email already exists")
            : setErrorMessage("");
        });
    }
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
        <h1 className="font-bold text-3xl mt-4 mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full name"
            className="p-4 mt-4 mb-4 w-full bg-gray-700 outline-none"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-4 mt-4 mb-4 w-full bg-gray-700 outline-none"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 mt-4 mb-4 w-full bg-gray-700 outline-none"
        />

        <h4 className="text-red-500 mt-2 mb-2 font-bold">{errorMessage}</h4>
        <button
          className="p-4 mt-4 mb-4 bg-red-700 w-full"
          onClick={(e) => handleValidateData(e)}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <h4 className="mt-4 mb-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn ? "New user? Sign up now" : "Already registered? Sign In"}
        </h4>
      </form>
    </div>
  );
};

export default Login;
