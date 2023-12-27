import "./Navigation.css";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext } from "react";
import { Button, Stack } from "@mui/material";
import { DataContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const { genre, setGenre, year, setYear, rating, setRating } =
    useContext(DataContext);

  // genre
  const handleGenre = (value) => {
    setGenre(value);
  };

  //   year
  const handleYear = (value) => {
    setYear(value);
  };

  //   rating
  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="navigation-container">
      <div>
        <h1>Movies</h1>
      </div>

      {/* genre */}
      <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Genre</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={genre}
              label="Genre"
              onChange={(e) => handleGenre(e.target.value)}
            >
              <MenuItem value={"All"}>All Genre</MenuItem>
              <MenuItem value={"Drama"}>Drama</MenuItem>
              <MenuItem value={"Crime"}>Crime</MenuItem>
              <MenuItem value={"Action"}>Action</MenuItem>
              <MenuItem value={"Adventure"}>Adventure</MenuItem>
              <MenuItem value={"Fantasy"}>Fantasy</MenuItem>
              <MenuItem value={"Romance"}>Romance</MenuItem>
              <MenuItem value={"Sci-Fi"}>Sci-Fi</MenuItem>
              <MenuItem value={"Biography"}>Biography</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      {/* year */}
      <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={year}
              label="Year"
              onChange={(e) => handleYear(e.target.value)}
            >
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={1991}>1991</MenuItem>
              <MenuItem value={1992}>1992</MenuItem>
              <MenuItem value={1994}>1994</MenuItem>
              <MenuItem value={1999}>1999</MenuItem>
              <MenuItem value={2001}>2001</MenuItem>
              <MenuItem value={2003}>2003</MenuItem>
              <MenuItem value={2008}>2008</MenuItem>
              <MenuItem value={2010}>2010</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      {/* rating */}
      <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Rating</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={rating}
              label="Rating"
              onChange={(e) => handleRating(e.target.value)}
            >
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      {/* add movie */}
      <div>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            onClick={() => navigate("/add-new-movie")}
            sx={{backgroundColor:"black"}}
          >
            Add Movie
          </Button>
        </Stack>
      </div>
    </div>
  );
};
export default Navigation;
