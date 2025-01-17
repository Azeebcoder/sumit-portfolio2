import React from "react";
import "./App.css";
import Home from "./Home";
import Test from "./components/test/Test.jsx";
import Addproject from "./components/addproject/Addproject.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Protected } from "./protected/Protected.jsx";
import Projects from "./components/projects/Projects.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/addskill"
            element={
              <Protected>
                <Test />
              </Protected>
            }
          />
          <Route
            path="/addproject"
            element={
              <Protected>
                <Addproject />
              </Protected>
            }
          />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
