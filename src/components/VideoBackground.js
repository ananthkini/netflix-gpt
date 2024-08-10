import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie_Id }) => {
  const trailerVideo = useSelector((store) => store.movie.trailerVideo);
  useMovieTrailer(movie_Id);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?&autoplay=1&mute=1"}
        title="Deadpool &amp; Wolverine | Final Trailer | In Theaters July 26"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
