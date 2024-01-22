import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ film, del, search, handlerating, starrate }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {film
        .filter(
          (el) =>
            el.title
              .trim()
              .toUpperCase()
              .includes(search.toUpperCase().trim()) && el.rate >= starrate
        )
        .map((el) => (
          <MovieCard
            el={el}
            del={del}
            key={el.id}
            handlerating={handlerating}
          />
        ))}
    </div>
  );
};

export default MovieList;
