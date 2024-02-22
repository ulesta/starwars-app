import React from "react";
import moment from "moment";

export function FormattedDate({ value }) {
  const formattedDate = moment(value).format("MM-DD-yyyy");

  return <span>{formattedDate}</span>;
}
