import React from "react";

import { Button } from "../Button/Button";

import "./Header.css";

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
