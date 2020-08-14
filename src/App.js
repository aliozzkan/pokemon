import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "@/assets/styles/style.scss"; 

function App() {
  return (
    <div className="App">
      <h1>Technical Test</h1>
      <h2>For Immfly</h2>
      <p>By Ali Ozzkan</p>
    </div>
  );
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
