import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Art from "./pages/Art";
import CS from "./pages/CS";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import "./theme.css"; 
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/cs" element={<CS />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Route>
    </Routes>
  );
}
