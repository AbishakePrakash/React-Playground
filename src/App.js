import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Launcher from "./components/Launcher";
import Home from "./components/home";
import { darkTheme, lightTheme } from "./utils/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Launcher />} />
          <Route path="/platform" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
