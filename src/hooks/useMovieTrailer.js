import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import CONSTANTS from "../utils/constants";

const useMovieTrailer = (movie_Id ) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const movieVideos = await fetch(
      "https://api.themoviedb.org/3/movie/" + movie_Id + "/videos",
      CONSTANTS.API_OPTIONS
    );

    const data = await movieVideos.json();

    const filteredData = data.results.filter((clip) => clip.type === "Trailer");
    const trailer = filteredData.length ? filteredData[0] : data.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
  return <div></div>;
};

export default useMovieTrailer;
