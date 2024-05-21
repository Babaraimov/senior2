import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Orders } from "./components/Pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Orders" element={<Orders />} />
      </Routes>
    </>
  );
}

export default App;
