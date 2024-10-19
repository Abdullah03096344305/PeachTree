import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/register";
import SignIn from "./components/signIn";
import React from "react";
import CashierProfile from "./components/cashierProfile";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CashierProfile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
