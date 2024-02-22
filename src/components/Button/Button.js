import React, { useEffect, useState } from "react";

import "./Button.css";

export function Button({ children, disabled, onClick, className }) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 250);
    }
  }, [clicked]);

  return (
    <button
      className={`Button ${clicked ? "focus-click" : null} ${className}`}
      disabled={disabled}
      onClick={(e) => {
        setClicked(true);
        onClick(e);
      }}
    >
      {children}
    </button>
  );
}
