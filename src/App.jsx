import { useState } from "react";
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

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${CITIES}`} element={<Cities />} />
        <Route path={`/${ATTRACTIONS}`} element={<Attractions />} />
        <Route path={`/${TRANSPORTATION}`} element={<Transportation />} />
        <Route path={`/${ACCOMMODATION}`} element={<Accommodation />} />

        <Route path={`/${SEARCH_LIST}`} element={<SearchList />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
