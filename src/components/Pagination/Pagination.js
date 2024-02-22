import React from "react";

import "./Pagination.css";
import { Button } from "../Button/Button";

export default function Pagination({
  page,
  pageMax,
  onPrevClick,
  onNextClick,
}) {
  return (
    <nav className="Pagination" aria-labelledby="Page Navigation">
      <Button disabled={page === 1} onClick={() => onPrevClick()}>
        ⬅️&nbsp;Previous
      </Button>
      <div>
        {page} / {pageMax}
      </div>
      <Button disabled={page === pageMax} onClick={() => onNextClick()}>
        Next&nbsp;➡️
      </Button>
    </nav>
  );
}
