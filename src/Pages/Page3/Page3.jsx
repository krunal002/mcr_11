import { useContext } from "react";
import "./Page3.css";
import { DataContext } from "../../App";
import MovieListing from "../../Components/MovieListing/MovieListing";

const Page3 = () => {
  const { moviesData } = useContext(DataContext)
  const starData = moviesData.filter( (movie) => movie.star)
//   console.log(watchlistData)

  return (
    <body>
      <h1>Stared</h1>
      <MovieListing data={ starData } />
    </body>
  );
};
export default Page3;
