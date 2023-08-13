import "./Page1.css";

import MovieListing from "../../Components/MovieListing/MovieListing";
import { useContext } from "react";
import { DataContext } from "../../App";
import Header from "../../Components/Header/Header";
import Navigation from "../../Components/Navigation/Navigation";

const Page1 = () => {
  const { moviesData } = useContext(DataContext);
  // console.log(moviesData)
  return (
    <body>
      <h1>Page1</h1>
      <Header/>
      <Navigation/>
      <MovieListing data={ moviesData } />
    </body>
  );
};
export default Page1;
