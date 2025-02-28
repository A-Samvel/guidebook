import { Box, Grid, Typography } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { Link } from "react-router-dom";
import {
  ACCOMMODATION,
  ATTRACTIONS,
  CITIES,
  TRANSPORTATION,
} from "../javascriptDocs/const";
import { useContext } from "react";
import { DarkModeContext } from "../javascriptDocs/context";

export default function Home() {
  const { color1, color2, border } = useContext(DarkModeContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: "100%",
            height: "80vh",
            mt: 3,
            ml: 0,
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            boxShadow:
              "0px 4px 8px rgba(0, 0, 0, 0.3), 0px 2px 5px rgba(0, 0, 0, 0.2)",
            backgroundImage:
              "url(https://res.cloudinary.com/dvufmt40x/image/upload/v1740747321/JapanHome_jdadxb.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            padding: 3,
            maxWidth: 500,
            color: color2,
            backgroundColor: color1,
            boxShadow:
              "0px 4px 8px rgba(0, 0, 0, 0.3), 0px 2px 5px rgba(0, 0, 0, 0.2)",
            borderRadius: 5,
            fontSize: 15,
            border: border,
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ textAlign: "center", fontFamily: "Roboto Mono" }}
          >
            Welcome to Japan Guidebook!
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, textAlign: "center", fontFamily: "Roboto Mono" }}
          >
            Discover the best of Japan with our comprehensive travel guide.
            Whether you're planning your first trip or are a seasoned traveler,
            our site provides valuable recommendations on:
          </Typography>

          {[
            {
              path: `/${CITIES}`,
              emoji: "🌆",
              label: "CITIES",
              description:
                "Explore Japan’s vibrant metropolises and charming towns",
            },
            {
              path: `/${ATTRACTIONS}`,
              emoji: "🏯",
              label: "ATTRACTIONS",
              description:
                "Discover iconic temples, historical sites, and hidden gems.",
            },
            {
              path: `/${ACCOMMODATION}`,
              emoji: "🏨",
              label: "ACCOMMODATION",
              description:
                "Find the best accommodations to suit your budget and style.",
            },
            {
              path: `/${TRANSPORTATION}`,
              emoji: "🚆",
              label: "TRANSPORTATION",
              description: "Navigate Japan with ease using our transport tips.",
            },
          ].map(({ path, emoji, label, description }) => (
            <Typography
              key={label}
              variant="body1"
              sx={{
                mt: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "center",
                fontFamily: "Roboto Mono",
              }}
            >
              <DoneOutlineIcon />
              {emoji}
              <Link
                to={path}
                style={{ textDecoration: "underline", color: "inherit" }}
              >
                {label}
              </Link>
              {description}
            </Typography>
          ))}
          <Typography
            variant="body1"
            sx={{ mt: 2, textAlign: "center", fontFamily: "Roboto Mono" }}
          >
            Plan your perfect journey with us and experience the beauty of Japan
            like never before! ✨
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
