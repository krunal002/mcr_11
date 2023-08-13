import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {

    const filterBySearch = (dataset) => {
        if (searchText === "") {
          return dataset;
        } else {
          const temp = moviesList.filter(
            (movie) =>
              movie.title.toLowerCase().includes(searchText.toLowerCase()) ||
              movie.director.toLowerCase().includes(searchText.toLowerCase()) ||
              movie.cast.toString().toLowerCase().includes(searchText.toLowerCase())
          );
    
          return temp;
        }
      };


  return (
    <div className="header-container">
      <div>
        <h1>IMDB</h1>
      </div>
      <div>
        <input type="search" />
      </div>
      <div className="component-container">
        <p>Movies</p>
        
        <Link to='/page2'><p>Watch List</p></Link>
        <Link to='/page3'> <p>starred Movies</p></Link>
       
      </div>
    </div>
  );
};
export default Header;
