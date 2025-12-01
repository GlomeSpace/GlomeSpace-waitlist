
import { useState } from "react";
import "./App.css";
import InvestorForm from "./pages/InvestorForm";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";

function App() {
  const[userEmail, setUserEmail] = useState('');

  return (
    <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/become-an-investor" element={<InvestorForm />} />
      </Routes>
  );
}

export default App;
