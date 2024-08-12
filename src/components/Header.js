import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import CONSTANTS from "../utils/constants";
import { handleShowGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/config";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt);
  const config = useSelector((store) => store.config);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleSearchBar = () => {
    dispatch(handleShowGptSearch(!gpt.showGptSearch));
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={CONSTANTS.headerLogo} alt="Logo" />
      {user && (
        <div className="flex justify-center items-center">
          {gpt.showGptSearch && (
            <div className="m-4">
              <select
                className=" outline-none p-2 bg-gray-900 text-white"
                onChange={handleLanguageChange}
              >
                {CONSTANTS.Languages.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="flex m-4">
            <button
              className="bg-purple-500 text-white h-10 w-44"
              onClick={handleSearchBar}
            >
              {gpt.showGptSearch ? "Exit Search" : "GPT Search"}
            </button>
          </div>
          <div className="flex p-2">
            <img className="w-12 h-12" src={user?.photoURL} alt="User" />
            <button className="font-bold text-white" onClick={handleSignOut}>
              Sign out ({user?.displayName})
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
