import moment from "moment";

import { UNKNOWN_VALUE } from "../constants/contants";

export function convertCentimetresToMetres(value) {
  if (!value) {
    return UNKNOWN_VALUE;
  }
  return value / 100;
}

export function formatDate(value) {
  if (!value) {
    return UNKNOWN_VALUE;
  }
  return moment(value).format("MM-DD-yyyy");
}
