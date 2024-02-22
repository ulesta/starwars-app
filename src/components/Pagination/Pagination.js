import React from "react";

import "./Pagination.css";

export default function Pagination({
  page,
  pageMax,
  onPrevClick,
  onNextClick,
}) {
  return (
    <div className="Pagination">
      <button
        disabled={page === 1}
        className="Pagination-button"
        onClick={() => onPrevClick()}
      >
        ⬅️ Previous
      </button>
      <div>
        {page} / {pageMax}
      </div>
      <button
        disabled={page === pageMax}
        className="Pagination-button"
        onClick={() => onNextClick()}
      >
        Next ➡️
      </button>
    </div>
  );
}
