import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/app";

const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
