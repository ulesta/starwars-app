import React from "react";

import "./Header.css";
import { Button } from "../Button/Button";

export default function Header({ title, onActionClick, backgroundColor }) {
  return (
    <header className="Header">
      <h1 className="Header-title">{title}</h1>
      <Button tabIndex={0} onClick={() => onActionClick()}>
        Dismiss
      </Button>
    </header>
  );
}
