import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Headlines from "./components/Headlines";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Headlines key="general"  pageSize={10} country="in" category="general" />}></Route>

            <Route exact path="/business" element={<Headlines key="business" pageSize={10} country="in" category="business" />}></Route>

            <Route exact path="/entertainment" element={<Headlines key="entertainment" pageSize={10} country="in" category="entertainment" />}></Route>

            <Route exact path="/general" element={<Headlines key="general" pageSize={10} country="in" category="general" />}></Route>

            <Route exact path="/health" element={<Headlines key="health" pageSize={10} country="in" category="health" />}></Route>

            <Route exact path="/science" element={<Headlines key="science" pageSize={10} country="in" category="science" />}></Route>

            <Route exact path="/sports" element={<Headlines key="sports" pageSize={10} country="in" category="sports" />}></Route>

            <Route path="/technology" element={<Headlines key="technology" pageSize={10} country="in" category="technology" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
export default App;
