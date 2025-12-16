import { useState } from "react";
import "./App.css";
import InvestorForm from "./pages/InvestorForm";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import { Layout } from "./components/Layout.jsx"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/become-an-investor" element={<InvestorForm />} />
      </Route>
    </Routes>
  );
}

export default App;
