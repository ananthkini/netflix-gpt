import React from "react";
import CONSTANTS from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie poster" src={CONSTANTS.POSTER_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
