import { Grid } from "@mui/material";
import ActionAreaCard from "./ActionAreaCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firestore";

export default function Cities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchCities() {
      try {
        const querySnapshot = await getDocs(collection(db, "cities"));
        const citiesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCities(citiesData);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    }

    fetchCities();
  }, []);

  console.log(cities)

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.6,
      },
    }),
  };

  console.log(cities)

  return (
    <Grid container spacing={0} justifyContent="center">
      {cities.map((city, index) => (
        <Grid
          item
          key={city.id}
          sx={{
            flexBasis: "20%",
            maxWidth: "20%",
            flexGrow: 0,
            flexShrink: 0,
          }}
        >
          <motion.div
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <ActionAreaCard city={city} />
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}
