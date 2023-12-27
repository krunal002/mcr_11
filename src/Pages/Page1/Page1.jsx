import "./Page1.css";

import MovieListing from "../../Components/MovieListing/MovieListing";
import { useContext } from "react";
import { DataContext } from "../../App";
import Header from "../../Components/Header/Header";
import Navigation from "../../Components/Navigation/Navigation";

const Page1 = () => {
  const { moviesData } = useContext(DataContext);
  
  return (
    <body>
      <Header/>
      <Navigation/>
      <MovieListing data={ moviesData } />
    </body>
  );
};
export default Page1;
