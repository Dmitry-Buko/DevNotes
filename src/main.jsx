import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import App from "./App.jsx";
import ThemeContext from "./provider/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter basename="/DevNotes">
      <ThemeContext>
        <App />
      </ThemeContext>
    </BrowserRouter>
);
