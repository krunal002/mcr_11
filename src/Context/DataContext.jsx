import { movies } from "../Data/MoviesData";

import { createContext, useEffect, useState } from "react";
export const DataContext = createContext();

export const DataContextHandler = ({ children }) => {
  localStorage.setItem("movie-data", JSON.stringify(movies));

  const [ moviesData, setMoviesData ] = useState(JSON.parse(localStorage.getItem("movie-data")))
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");

  const reqData = JSON.parse(localStorage.getItem("movie-data"));
 
  const searchdata = search === "" ?reqData :reqData.filter(
            (movie) =>
              movie.title.toLowerCase().includes(search.toLowerCase()) ||
              movie.director.toLowerCase().includes(search.toLowerCase()) ||
              movie.cast.toString().toLowerCase().includes(search.toLowerCase())
          )

  const genreData =
    genre === ""
      ? searchdata
      : searchdata.filter((movie) => movie.genre.includes(genre));

  const yearData =
    year === ""
      ? genreData
      : genreData.filter((movie) => movie.year === Number(year));

  const ratingData =
    rating === ""
      ? yearData
      : yearData.filter((movie) => movie.rating === Number(rating));

useEffect(() => {
  setMoviesData(ratingData)
},[])

console.log( moviesData)
  return (
    <div>
      <DataContext.Provider
        value={{
          moviesData, setMoviesData,
          genre,
          setGenre,
          year,
          setYear,
          rating,
          setRating,
          search, setSearch
        }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
};
