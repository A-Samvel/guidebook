import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "@mui/material";

export default function CityImageSlider({ photos }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!photos || photos.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [photos.length]);

  const variants = {
    enter: { x: 300, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100vw",
        height: "60vh",
        boxShadow:
          "0px 4px 8px rgba(0, 0, 0, 0.3), 0px 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={photos[index]}
          src={photos[index]}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </AnimatePresence>
    </Box>
  );
}
