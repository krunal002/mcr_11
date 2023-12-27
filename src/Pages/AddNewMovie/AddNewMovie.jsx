import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { DataContext } from "../../App";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";

const AddNewMovie = () => {
  const navigate = useNavigate();
  const { moviesData, setMoviesData } = useContext(DataContext);
  const [newMovie, setNewMovie] = useState({
    id: moviesData.length + 1,
    title: "",
    year: 0,
    genre: [],
    rating: 0,
    director: "",
    writer: "",
    cast: [],
    summary: "",
    imageURL: "",
  });

  const addMovieHandle = () => {
    setNewMovie({
      id: moviesData.length + 1,
      title: "",
      year: 0,
      genre: [],
      rating: 0,
      director: "",
      writer: "",
      cast: [],
      summary: "",
      imageURL: "",
    });
    setMoviesData([...moviesData, newMovie]);
    navigate("/");
  };

  const cancelEvent = () => {
    setNewMovie({
      id: moviesData.length + 1,
      watchlist: false,
      star: false,
      title: "",
      year: 0,
      genre: [],
      rating: 0,
      director: "",
      writer: "",
      cast: [],
      summary: "",
      imageURL: "",
    });
    navigate("/");
  };

  const flag =
    newMovie.title === "" ||
    newMovie.year === 0 ||
    newMovie.rating === 0 ||
    newMovie.imageURL === "" ||
    newMovie.summary === "";

  return (
    <div>
      <Header />

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Title"
          variant="standard"
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <TextField
          id="standard-basic"
          label="Year"
          variant="standard"
          onChange={(e) => setNewMovie({ ...newMovie, year: e.target.value })}
        />
        <TextField
          id="standard-basic"
          label="Genre"
          variant="standard"
          onChange={(e) =>
            setNewMovie({ ...newMovie, genre: e.target.value.split(",") })
          }
        />
        <TextField
          id="standard-basic"
          label="Rating"
          variant="standard"
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        />
        <TextField
          id="standard-basic"
          label="Director"
          variant="standard"
          onChange={(e) =>
            setNewMovie({ ...newMovie, director: e.target.value })
          }
        />
        <TextField
          id="standard-basic"
          label="Director"
          variant="standard"
          onChange={(e) => setNewMovie({ ...newMovie, writer: e.target.value })}
        />
        <TextField
          id="standard-basic"
          label="Cast"
          variant="standard"
          onChange={(e) =>
            setNewMovie({ ...newMovie, cast: e.target.value.split(",") })
          }
        />
        <TextField
          id="standard-basic"
          label="Summary"
          variant="standard"
          onChange={(e) =>
            setNewMovie({ ...newMovie, summary: e.target.value })
          }
        />
        <TextField
          id="standard-basic"
          label="Poster"
          variant="standard"
          onChange={(e) =>
            setNewMovie({ ...newMovie, imageURL: e.target.value })
          }
        />

        {/* buttons */}
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={addMovieHandle} disabled={flag}>
            Add Movie
          </Button>
          <Button variant="outlined" onClick={cancelEvent}>
            Cancel
          </Button>
        </Stack>
      </Box>
    </div>
  );
};
export default AddNewMovie;
