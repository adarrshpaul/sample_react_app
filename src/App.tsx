import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamesPage from "./pages/games";
import HomePage from "./pages/home"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App

