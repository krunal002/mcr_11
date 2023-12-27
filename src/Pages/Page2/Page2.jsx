import "./Page2.css";
import { useContext } from "react";
import { DataContext } from "../../App";
import MovieListing from "../../Components/MovieListing/MovieListing";
import Header from "../../Components/Header/Header";

const Page2 = () => {
  const { moviesData } = useContext(DataContext);
  const watchlistData = moviesData.filter((movie) => movie.watchlist);

  return (
    <body>
      <Header />

      <h1>WatchList</h1>
      <MovieListing data={watchlistData} />
    </body>
  );
};
export default Page2;
