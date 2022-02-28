import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";

function App() {

  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
