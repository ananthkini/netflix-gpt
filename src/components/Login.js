import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import CONSTANTS from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

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
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          errorCode === "auth/invalid-credential"
            ? setErrorMessage("Invalid username or password")
            : setErrorMessage("");
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
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
            photoURL: CONSTANTS.photoURL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              setErrorMessage("Sign up successful, Please Sign In now");
              setTimeout(() => {
                setIsSignIn(true);
              }, 1000);
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
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
          src={CONSTANTS.bodyBG}
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
