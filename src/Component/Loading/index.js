import React from "react";
import "./index.scss";
export default function Loading() {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex align-items-center justify-content-center"
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="transparent"
          stroke-width="8px"
          stroke-dasharray="160"
        />
      </svg>
    </div>
  );
}
