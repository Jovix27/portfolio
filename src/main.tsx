import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Log base URL for debugging
console.log("Base URL:", import.meta.env.BASE_URL);
console.log("Mode:", import.meta.env.MODE);

const rootElement = document.getElementById("root");

if (!rootElement) {
  document.body.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif; text-align: center;">
      <h1>Critical Error</h1>
      <p>Root element not found. Please check the HTML structure.</p>
    </div>
  `;
  throw new Error("Root element not found");
}

try {
  const root = createRoot(rootElement);
  root.render(<App />);
} catch (error) {
  console.error("Failed to render app:", error);
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif; text-align: center;">
      <h1>Error Loading Portfolio</h1>
      <p>There was an error loading the portfolio. Please refresh the page.</p>
      <p style="color: #666; font-size: 12px; margin-top: 20px;">
        Error: ${error instanceof Error ? error.message : String(error)}
      </p>
      <p style="color: #999; font-size: 11px; margin-top: 10px;">
        Base URL: ${import.meta.env.BASE_URL || "not set"}
      </p>
    </div>
  `;
}
