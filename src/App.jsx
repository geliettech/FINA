import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import LandingPage from "./pages/landing";
import SignIn from "./pages/auth/signIn";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
