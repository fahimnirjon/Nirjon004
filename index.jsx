import "../global.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { LandingPageUi } from "./screens/LandingPageUi";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<LandingPageUi />);
