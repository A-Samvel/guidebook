import { useState, useContext } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { SEARCH_LIST } from "../javascriptDocs/const";

// import { DarkModeContext } from "../javascriptDocs/context";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
//   const { color1, color2 } = useContext(DarkModeContext);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    if (searchValue.trim()) {
      navigate(`/${SEARCH_LIST}`);
      setSearchValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchValue.trim()) {
      handleSearchClick();
    }
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onKeyDown={handleKeyDown}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearchClick}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        maxWidth: 500,
        margin: "20px 0",
        // backgroundColor: "black",
        // borderRadius: "15px",
        // "& .MuiOutlinedInput-root": {
        //   "& fieldset": {
        //     borderColor: color1,
        //   },
        //   "&:hover fieldset": {
        //     borderColor: color1,
        //   },
        //   "&.Mui-focused fieldset": {
        //     borderColor: color1,
        //   },
        // },
        // "& .MuiInputLabel-root": {
        //   fontFamily: "Playfair Display, sans-serif",
        //   color: color1,
        // },
        // "& .MuiInputBase-input": {
        //   fontFamily: "Playwrite IN, sans-serif",
        //   color: color1,
        // },
        // "& .MuiInputBase-input::placeholder": {
        //   fontFamily: "Playwrite IN, sans-serif",
        //   color: color1,
        // },
        // "& .MuiInputBase-input:focus::placeholder": {
        //   color: color1,
        // },
        // "& .MuiInputLabel-root.Mui-focused": {
        //   color: color1,
        // },
      }}
    />
  );
}