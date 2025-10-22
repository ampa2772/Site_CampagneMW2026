import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

document.title = "Berner Ville d’Avenir";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

