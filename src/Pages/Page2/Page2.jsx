import { useContext } from "react";
import "./Page2.css";
import { DataContext } from "../../App";
import MovieListing from "../../Components/MovieListing/MovieListing";

const Page2 = () => {
  const { moviesData } = useContext(DataContext)
  const watchlistData = moviesData.filter( (movie) => movie.watchlist)
  console.log(watchlistData)

  return (
    <body>
      <h1>WatchList</h1>
      <MovieListing data={ watchlistData } />
    </body>
  );
};
export default Page2;
