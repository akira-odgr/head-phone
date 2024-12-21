import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MouseFollower } from "react-mouse-follower";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <MouseFollower />
        <App />
    </StrictMode>
);
