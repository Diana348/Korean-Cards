import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/ui/Footer";
import HeaderElements from "./components/ui/Header/index.jsx";
import WordsTable from "./components/ui/Main/index.jsx";
import CheckPage from "./pages/CheckPage";
import GameMenu from "./pages/GameMenu";
import ErrorPage from "./pages/ErrorPage";
import WordsCategoryPage from "./pages/WordsCategoryPage";

function App() {
  return (
    <>
      <HeaderElements />
      <div className="mainBlock">
        <Routes>
          <Route exact path="/" element={<WordsTable />} />
          <Route path="/game-menu" element={<GameMenu />} />
          <Route path="/check/:type" element={<CheckPage />} />
          <Route path="/words/:category" element={<WordsCategoryPage />} />
          <Route path="*" element={<ErrorPage />} />
          {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
