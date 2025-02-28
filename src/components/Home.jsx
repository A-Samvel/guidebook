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
import { motion } from "framer-motion";

export default function Home() {
  const { color1, color2, border } = useContext(DarkModeContext);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
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
              textAlign: "center",
            }}
          >
            <motion.div variants={fadeIn} custom={0}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontFamily: "Roboto Mono" }}
              >
                Welcome to Japan Guidebook!
              </Typography>
            </motion.div>

            <motion.div variants={fadeIn} custom={0.2}>
              <Typography variant="body1" sx={{ fontFamily: "Roboto Mono" }}>
                Discover the best of Japan with our comprehensive travel guide.
              </Typography>
            </motion.div>

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
                description:
                  "Navigate Japan with ease using our transport tips.",
              },
            ].map(({ path, emoji, label, description }, index) => (
              <motion.div
                key={label}
                variants={fadeIn}
                custom={index * 0.2 + 0.4}
              >
                <Typography
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
              </motion.div>
            ))}

            <motion.div variants={fadeIn} custom={1}>
              <Typography variant="body1" sx={{ fontFamily: "Roboto Mono" , mt: 2}}>
                Plan your perfect journey with us and experience the beauty of
                Japan like never before! ✨
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Grid>
    </Grid>
  );
}
