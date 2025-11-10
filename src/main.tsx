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

// Clear any existing content in root before React renders
rootElement.innerHTML = "";

try {
  const root = createRoot(rootElement);
  root.render(<App />);
} catch (error) {
  console.error("Failed to render app:", error);
  const errorMessage = error instanceof Error ? error.message : String(error);
  const errorStack = error instanceof Error ? error.stack : undefined;
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif; text-align: center;">
      <h1>Error Loading Portfolio</h1>
      <p>There was an error loading the portfolio. Please refresh the page.</p>
      <p style="color: #666; font-size: 12px; margin-top: 20px;">
        Error: ${errorMessage}
      </p>
      ${errorStack ? `<p style="color: #999; font-size: 10px; margin-top: 10px; text-align: left; max-width: 600px; margin-left: auto; margin-right: auto; white-space: pre-wrap; font-family: monospace;">${errorStack}</p>` : ''}
      <p style="color: #999; font-size: 11px; margin-top: 10px;">
        Base URL: ${import.meta.env.BASE_URL || "not set"}
      </p>
      <p style="color: #999; font-size: 11px; margin-top: 10px;">
        Check the browser console (F12) for more details.
      </p>
    </div>
  `;
}
