import { createContext, useEffect, useState } from "react";
import { movies } from "../Data/MoviesData";

export const DataContext = createContext();

export const DataContextHandler = ({ children }) => {
  // Initialize localStorage only if data is not present
  useEffect(() => {
    if (!localStorage.getItem("movie-data")) {
      localStorage.setItem("movie-data", JSON.stringify(movies));
    }
  }, []);

  const [moviesData, setMoviesData] = useState(() => {
    const storedData = localStorage.getItem("movie-data");
    return storedData ? JSON.parse(storedData) : movies;
  });

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    const reqData = JSON.parse(localStorage.getItem("movie-data"));

    const genreData =
      genre === ""
        ? reqData
        : reqData.filter((movie) => movie.genre.includes(genre));

    const yearData =
      year === ""
        ? genreData
        : genreData.filter((movie) => movie.year === Number(year));

    const ratingData =
      rating === ""
        ? yearData
        : yearData.filter((movie) => movie.rating === Number(rating));

    setMoviesData(ratingData);
  }, [genre, year, rating]);

  return (
    <DataContext.Provider
      value={{
        moviesData,
        setMoviesData,
        search,
        setSearch,
        genre,
        setGenre,
        year,
        setYear,
        rating,
        setRating,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
