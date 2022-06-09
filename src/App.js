import "./App.css";
import OpeningPage from "./containers/OpeningPage/OpeningPage";
import ExplanationPage from "./containers/ExplanationPage/ExplanationPage";
import AmericanQuestionPage from "./containers/AmericanQuestionPage/AmericanQuestionPage";
import MapPage from "./containers/MapPage/MapPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [useCurrQuestion, setUseCurrQuestion] = useState(0);
  const [currExpPage, setCurrExpPage] = useState(9);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<OpeningPage />} />
          <Route
            exact
            path="/ExplanationPage"
            element={
              <ExplanationPage
                useCurrQuestion={useCurrQuestion}
                setUseCurrQuestion={setUseCurrQuestion}
                currExpPage={currExpPage}
                setCurrExpPage={setCurrExpPage}
              />
            }
          />
          <Route
            exact
            path="/AmericanQuestionPage"
            element={
              <AmericanQuestionPage
                useCurrQuestion={useCurrQuestion}
                setUseCurrQuestion={setUseCurrQuestion}
                currExpPage={currExpPage}
                setCurrExpPage={setCurrExpPage}
              />
            }
          />
          <Route exact path="/MapPage" element={<MapPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;