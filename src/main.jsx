import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { CardGrid } from "./components/cardGrid";
import "./styles/styles.css";

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <div className="game-title">Memory Game</div>
    <CardGrid />
  </StrictMode>
);
