import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/Index.css";
import "./assets/css/Remedy.css";

createRoot(document.getElementById("root")!).render(
    <>
        <App />
    </>
);
