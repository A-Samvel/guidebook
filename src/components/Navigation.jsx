import { AppBar, Box, Typography, IconButton, Button } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { ACCOMMODATION, ATTRACTIONS, CITIES, TRANSPORTATION } from "../javascriptDocs/const";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { DarkModeContext } from "../javascriptDocs/context"; 

export default function Navigation() {
  const {setDarkMode, darkMode, color1, color2,textColor} = useContext(DarkModeContext)

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: color1,
        boxShadow:
          "0px 4px 8px rgba(0, 0, 0, 0.3), 0px 2px 5px rgba(0, 0, 0, 0.2)",
        margin: 0,
        padding: 0,
        borderTop: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
          height: "80px",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h5"
            sx={{ color : textColor, fontFamily: "Roboto Mono", }}
          >
            Japan   Travel   Guide   
          </Typography>
        </Link>

        <SearchBar />

        <Box sx={{display : 'flex', justifyContent:'center', alignContent:'space-between', gap: '10px'}}>
          <NavLink
            to={`/${CITIES}`}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: textColor,
              opacity: isActive ? "0.5" : "1",
            })}
          >
            <Button color="inherit" children="CITIES" />
          </NavLink>

          <NavLink
            to={`/${ATTRACTIONS}`}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: textColor,
              opacity: isActive ? "0.5" : "1",
            })}
          >
            <Button color="inherit" children="ATTRACTIONS" />
          </NavLink>

          <NavLink
            to={`/${TRANSPORTATION}`}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: textColor,
              opacity: isActive ? "0.5" : "1",
            })}
          >
            <Button color="inherit" children="TRANSPORTATION" />
          </NavLink>

          <NavLink
            to={`/${ACCOMMODATION}`}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: textColor,
              opacity: isActive ? "0.5" : "1",
            })}
          >
            <Button color="inherit" children="ACCOMMODATION" />
          </NavLink>
        </Box>

        {/*  {isLoginedUser ? (
          <NavLink
            to={`/${PROFILE}`}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: color2,
              opacity: isActive ? "0.5" : "1",
            })}
          >
            <Button color="inherit" children="Profile" />
          </NavLink>
        ) : (
          <NavLink
            to={`/${SIGN_IN}`}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: color2,
              opacity: isActive ? "0.5" : "1",
            })}
          >
            <Button color="inherit" children="Sign In" />
          </NavLink>
        )} */}

        <Box>
          <IconButton
            color="inherit"
            onClick={toggleTheme}
            sx={{ color: textColor }}
          >
            {darkMode ? <DarkModeIcon /> : <LightModeIcon /> }
          </IconButton>
        </Box> 
      </Box>
    </AppBar>
  );
}
