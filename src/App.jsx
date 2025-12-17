import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ExperienceDetails from "./pages/ExperienceDetails";
import CreateExperience from "./pages/CreateExperience";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience/:slug" element={<ExperienceDetails />} />
        <Route path="/create" element={<CreateExperience />} />
      </Routes>
    </>
  );
}

export default App;
