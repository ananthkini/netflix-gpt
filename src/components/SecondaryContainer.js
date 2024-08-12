import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="mt-10">
      <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
      <MovieList title={'Trending'} movies={movies.nowPlayingMovies} />
      <MovieList title={'Popular'} movies={movies.nowPlayingMovies} />
      <MovieList title={'Horror'} movies={movies.nowPlayingMovies} />
      <MovieList title={'International'} movies={movies.nowPlayingMovies} />
      <MovieList title={'Comedy'} movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
