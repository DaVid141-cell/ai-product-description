// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./page/home";
import AiGenerator from "./page/ai-generator";
import Dashboard from "./page/dashboard";
import InputForm from "./components/InputForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Home />} />
      <Route path="/product-generation" element={<AiGenerator />}/>
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
  );
}

export default App;
