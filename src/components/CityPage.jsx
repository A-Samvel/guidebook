import { useParams } from "react-router-dom";
import { Typography, CircularProgress, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firestore";


//Need loading 
export default function CityPage() {
  const { cityName } = useParams();
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCity() {
      setError(null);

      try {
        const citiesRef = collection(db, "cities"); 
        const q = query(citiesRef, where("cityName", "==", cityName.toLowerCase())); 

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
      <Typography variant="h5" sx={{ textAlign: "center", mt: 4, color: "red" }}>
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

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4">
        Welcome to {city.cityName.toUpperCase()}!
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        {city.description}
      </Typography>
    </Box>
  );
}


