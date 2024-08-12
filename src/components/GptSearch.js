import React from "react";
import SearchContainer from "./SearchContainer";
import GptSuggestion from "./GptSuggestion";
import CONSTANTS from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img alt="logo" src={CONSTANTS.bodyBG} />
      </div>
      <SearchContainer />
      <GptSuggestion />
    </div>
  );
};

export default GptSearch;
