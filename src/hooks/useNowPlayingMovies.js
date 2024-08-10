import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import CONSTANTS from '../utils/constants';
import { addNowPlayingMovies } from '../utils/movieSlice';

function useNowPlayingMovies() {
    const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      CONSTANTS.API_OPTIONS
    );

    const movieList = await data.json();
    dispatch(addNowPlayingMovies(movieList.results));

  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  
  return (
    <div>useNowPlayingMovies</div>
  )
}

export default useNowPlayingMovies