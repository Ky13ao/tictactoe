import { createRoot } from "react-dom/client";
import React from "react";

import App from "./project/app/component/App";
import "./index.css";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(<App />);
