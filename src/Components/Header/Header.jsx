import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../App";

const Header = () => {
  const { search, setSearch } = useContext(DataContext);
  // console.log("Ready..?")
  return (
    <header className="header-container">
      <div>
        <h1>IMDB</h1>
      </div>

      <div>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-wrapper"
          placeholder="Search movies..."
        />
      </div>

      <nav className="navlink-container">
        <Link to="/" className="section-link-wrapper">
          <p>Movies</p>
        </Link>
        <Link to="/page2" className="section-link-wrapper">
          <p>Watch List</p>
        </Link>
        <Link to="/page3" className="section-link-wrapper">
          {" "}
          <p>starred Movies</p>
        </Link>
      </nav>
    </header>
  );
};
export default Header;
