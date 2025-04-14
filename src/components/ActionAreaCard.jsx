import React from "react";
import { useContext } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { DarkModeContext } from "../javascriptDocs/context";
import { useNavigate } from "react-router-dom";

export default function ActionAreaCard({ city }) {
  const { color1, color2, border, textColor } = useContext(DarkModeContext);
  const { cityName, photos } = city;
  const navigate = useNavigate();

  const mainImageUrl = photos[0];

  const handleClick = () => {
    navigate(`/cities/${cityName.toLowerCase()}`);
  };

  return (
    <Card
      sx={{
        maxHeight: 600,
        height: "350px",
        width: "250px",
        backgroundColor: color2,
        borderRadius: "40px",
        margin: "10px",
        boxShadow:
          "0px 4px 8px rgba(0, 0, 0, 0.3), 0px 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="div"
          sx={{
            height: 260,
            backgroundImage: `url(${mainImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",

            boxShadow:
              "0px 4px 8px rgba(0, 0, 0, 0.3), 0px 2px 5px rgba(0, 0, 0, 0.2)",

            mt: 2,
          }}
        />
        <CardContent
          sx={{
            backgroundColor: color1,
            color: textColor,
            display: "flex",
            justifyContent: "center",
            mt:1
          }}
        >
          <Typography variant="h5" component="div" fontFamily="Roboto Mono">
            {cityName.toUpperCase()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
