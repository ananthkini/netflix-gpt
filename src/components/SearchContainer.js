import React, { useRef } from "react";
import lang from "../utils/languages";
import { useSelector } from "react-redux";
import client from "../utils/openai";

const SearchContainer = () => {
  const langKey = useSelector((store) => store.config);
  const language = langKey.language;
  const searchText = useRef(null);

  const handleSearchMovies = async () => {
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: "user", content: searchText.current.value }],
      model: "gpt-3.5-turbo",
    });

    // console.log(chatCompletion);
  };
  return (
    <div className="pt-[20%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 "
          placeholder={lang[language].SearchBarPlaceholderText}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white"
          onClick={handleSearchMovies}
        >
          {lang[language].searchText}
        </button>
      </form>
    </div>
  );
};

export default SearchContainer;
