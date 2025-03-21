import { Grid } from "@mui/material";
import ActionAreaCard from "./ActionAreaCard";
import { motion } from "framer-motion";

export default function Cities() {
  const obj = {
    cityName: "TOKYO",
    mainImageUrl:
      "https://res.cloudinary.com/dvufmt40x/image/upload/v1742565472/tokyo-main_kl5wre.jpg",
  };

  const arr = new Array(20).fill(obj);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.6 /*1*/ ,
      },
    }),
  };

  return (
    <Grid container spacing={0} justifyContent="center">
      {arr.map((city, index) => (
        <Grid
          item
          key={index}
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
