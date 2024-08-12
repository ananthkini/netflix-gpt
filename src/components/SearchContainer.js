import React from "react";
import lang from "../utils/languages";
import { useSelector } from "react-redux";

const SearchContainer = () => {
  const langKey = useSelector((store) => store.config);
  const language = langKey.language
  console.log(language);
  return (
    <div className="pt-[20%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9 "
          placeholder={lang[language].SearchBarPlaceholderText}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white">
          {lang[language].searchText}
        </button>
      </form>
    </div>
  );
};

export default SearchContainer;
