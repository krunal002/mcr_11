import "./MovieListing.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { DataContext } from "../../App";
import { useNavigate } from "react-router-dom";

const MovieListing = ({ data }) => {
  const navigate = useNavigate();
  const { moviesData, setMoviesData } = useContext(DataContext);

  const starHandle = (movie) => {
    const update = moviesData.map((req) =>
      req.id === movie.id ? { ...req, star: !req.star } : req
    );
    setMoviesData(update);
  };

  const watchlistHandle = (movie) => {
    if (movie.watchlist) {
      navigate("/page2");
    } else {
      const update = moviesData.map((req) =>
        req.id === movie.id ? { ...req, watchlist: true } : req
      );
      setMoviesData(update);
    }
  };

  return (
    <div className="movie-container">
      {data.map((movie) => {
        const isStared = movie.star;
        const isWatch = movie.watchlist;
        return (
          <div className="individual-movie-container">
            <img
              src={movie.imageURL}
              alt="poster"
              className="movie-poster"
              onClick={() => navigate(`/movie/${movie.id}`)}
            />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <Stack spacing={2} direction="row" sx={{ m: 1 }}>
              <Button
                variant="contained"
                size="small"
                onClick={() => starHandle(movie)}
                sx={{ backgroundColor: "black" }}
              >
                {isStared ? "Unstar" : "Star"}
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => watchlistHandle(movie)}
                sx={{ color: "black" }}
              >
                {isWatch ? "Go to Watchlist" : "Add to Watchlist"}
              </Button>
            </Stack>
          </div>
        );
      })}
    </div>
  );
};
export default MovieListing;
