import { Link } from "react-router-dom";
import "./Header.css"
import { useContext } from "react";
import { DataContext } from "../../App";
const Header = () => {
    const { search, setSearch } = useContext(DataContext);
    console.log(search)

  return (
    <div className="header-container">
      <div>
        <h1>IMDB</h1>
      </div>
      <div>
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
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
