import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

try {
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error("Failed to render app:", error);
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif;">
      <h1>Error Loading Portfolio</h1>
      <p>There was an error loading the portfolio. Please refresh the page.</p>
      <p style="color: #666; font-size: 12px;">Error: ${error instanceof Error ? error.message : String(error)}</p>
    </div>
  `;
}
