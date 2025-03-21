import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import {
  ACCOMMODATION,
  ATTRACTIONS,
  CITIES,
  SEARCH_LIST,
  TRANSPORTATION,
} from "./javascriptDocs/const";
import SearchList from "./components/SearchList";
import Attractions from "./components/Attractions";
import Transportation from "./components/Transportation";
import Accommodation from "./components/Accommodation";
import Cities from "./components/Cities";

import { DarkModeContext } from "./javascriptDocs/context";
import CityPage from "./components/CityPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const color1 = darkMode ? "#0D47A1" : "#FFB7C5";
  const color2 = darkMode ? "#5998b7" : "#F4F4F4";
  const border = darkMode ? "2px #72a0e5 solid " : "2px #e594c5 solid";
  const textColor = darkMode ? "white" : "black";

  useEffect(() => {
    document.documentElement.style.setProperty("--color1", color1);
    document.documentElement.style.setProperty("--color2", color2);
  }, [darkMode, color1, color2]);
  return (
    <BrowserRouter>
      <DarkModeContext.Provider
        value={{ setDarkMode, darkMode, color1, color2, border,textColor }}
      >
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/${CITIES}`} element={<Cities />} />
          <Route path="/cities/:cityName" element={<CityPage />} />
          <Route path={`/${ATTRACTIONS}`} element={<Attractions />} />
          <Route path={`/${TRANSPORTATION}`} element={<Transportation />} />
          <Route path={`/${ACCOMMODATION}`} element={<Accommodation />} />

          <Route path={`/${SEARCH_LIST}`} element={<SearchList />} />
        </Routes>
      </DarkModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
