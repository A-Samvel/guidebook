import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

export default function CityPage() {
  const { cityName } = useParams();

  return (
    <Typography variant="h4" sx={{ mt: 4, textAlign: "center" }}>
      Welcome to {cityName.toUpperCase()}!
    </Typography>
  );
}