// import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import Countries from "./pages/Countries";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/countries">
          <Route index element={<Countries />} />

          <Route path=":countryName" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
