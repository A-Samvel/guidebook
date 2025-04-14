import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firestore";
import { motion, AnimatePresence } from "framer-motion";
import CityImageSlider from "./CityImageSlider";
import { DarkModeContext } from "../javascriptDocs/context";
import { ToggleButton } from "@mui/material";

//Need loading
export default function CityPage() {
  const { cityName } = useParams();
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  const [activeTab, setActiveTab] = useState("description");
  const { color1, color2, border, textColor } = useContext(DarkModeContext);

  useEffect(() => {
    async function fetchCity() {
      setError(null);

      try {
        const citiesRef = collection(db, "cities");
        const q = query(
          citiesRef,
          where("cityName", "==", cityName.toLowerCase())
        );

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setCity(querySnapshot.docs[0].data());
        } else {
          setCity(null);
        }
      } catch (err) {
        setError("Error loading city data.");
        console.error("Firestore error:", err);
      }
    }

    fetchCity();
  }, [cityName]);

  if (error) {
    return (
      <Typography
        variant="h5"
        sx={{ textAlign: "center", mt: 4, color: "red" }}
      >
        {error}
      </Typography>
    );
  }

  if (!city) {
    return (
      <Typography variant="h5" sx={{ textAlign: "center", mt: 4 }}>
        City not found
      </Typography>
    );
  }

  const tabContent = {
    description: <Typography variant="body1">{city.description}</Typography>,
    history: <Typography variant="body1">{city.history}</Typography>,
    attractions: (
      <ul>
        {city.attractions?.map((place, index) => (
          <li key={index}>
            <Typography>{place}</Typography>
          </li>
        ))}
      </ul>
    ),
    reviews:
      city.reviews && city.reviews.length > 0 ? (
        <ul>
          {city.reviews.map((review, index) => (
            <li key={index}>
              <Typography>"{review}"</Typography>
            </li>
          ))}
        </ul>
      ) : (
        <Typography>No reviews yet.</Typography>
      ),
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
      }}
    >
      {Array.isArray(city.photos) && city.photos.length > 0 && (
        <CityImageSlider photos={city.photos} />
      )}

      <Box
        sx={{
          width: "1450px",
          height: "auto",
          backgroundColor: color1,
          color: textColor,
          boxShadow:
            "0px 4px 8px rgba(0, 0, 0, 0.3), 0px 2px 5px rgba(0, 0, 0, 0.2)",
          border: border,
          borderRadius: "20px",
          px: 1,
          py: 3,
          my: 2,
        }}
      >
        <Box textAlign="center">
          <ToggleButton
            value="arrow"
            sx={{
              width: 140,
              height: 40,
              padding: 0,
              clipPath: "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
              backgroundColor: color2,
              color: textColor,
              "&.Mui-selected": {
                backgroundColor: color1,
              },
            }}
            disabled={activeTab === "description"}
            onClick={() => {
              setActiveTab("description");
            }}
          >
            description
          </ToggleButton>

          <ToggleButton
            value="arrow"
            sx={{
              width: 140,
              height: 40,
              padding: 0,
              clipPath:
                "polygon(0% 0% ,90% 0,100% 50%,90% 100%,0% 100%,10% 50%)",
              backgroundColor: color2,
              color: textColor,
              "&.Mui-selected": {
                backgroundColor: color1,
              },
            }}
            disabled={activeTab === "history"}
            onClick={() => {
              setActiveTab("history");
            }}
          >
            history
          </ToggleButton>

          <ToggleButton
            value="arrow"
            sx={{
              width: 140,
              height: 40,
              padding: 0,
              clipPath:
                "polygon(0% 0% ,90% 0,100% 50%,90% 100%,0% 100%,10% 50%)",
              backgroundColor: color2,
              color: textColor,
              "&.Mui-selected": {
                backgroundColor: color1,
              },
            }}
            disabled={activeTab === "attractions"}
            onClick={() => {
              setActiveTab("attractions");
            }}
          >
            attractions
          </ToggleButton>
          <ToggleButton
            value="arrow"
            sx={{
              width: 140,
              height: 40,
              padding: 0,
              clipPath:
                "polygon(0% 0% ,100% 0,100% 50%,100% 100%,0% 100%,10% 50%)",
              backgroundColor: color2,
              color: textColor,
              "&.Mui-selected": {
                backgroundColor: color1,
              },
            }}
            disabled={activeTab === "reviews"}
            onClick={() => {
              setActiveTab("reviews");
            }}
          >
            reviews
          </ToggleButton>
        </Box>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          {" "}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Box sx={{ px: 3, py: 2, minHeight: "100px" }}>
                {tabContent[activeTab]}
              </Box>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  );
}
