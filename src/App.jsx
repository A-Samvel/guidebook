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

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const color1 = darkMode ? "#FFB7C5" : "#0D47A1";
  const color2 = darkMode ? "#F4F4F4" : "#5998b7";
  const border = darkMode ? '2px #e594c5 solid' :'2px #72a0e5solid '

  useEffect(() => {
    document.documentElement.style.setProperty("--color1", color1);
    document.documentElement.style.setProperty("--color2", color2);
  }, [darkMode, color1, color2]);
  return (
    <BrowserRouter>
      <DarkModeContext.Provider value={{ setDarkMode, darkMode, color1, color2,border }}>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/${CITIES}`} element={<Cities />} />
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
