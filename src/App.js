import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Launcher from "./components/Launcher";
import Home from "./components/home";
import { darkTheme, lightTheme } from "./utils/theme";
import Zoom from "./components/zoom";
// import Application from "./test";

function App() {
  return (
    <div className="App">
      {/* <ThemeProvider theme={lightTheme}> */}
      {/* <CssBaseline /> */}
      <Routes>
        {/* <Route path="/" element={<Launcher />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/zoom" element={<Zoom />} />
        {/* <Route path="/test" element={Application} /> */}
      </Routes>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
