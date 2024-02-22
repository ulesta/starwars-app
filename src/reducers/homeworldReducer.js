export const homeworldInitialState = {
  details: null,
  loading: true,
  error: null,
};

export const homeworldReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_HOMEWORLD":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_HOMEWORLD_SUCCESS":
      return {
        ...state,
        details: action.details,
        loading: false,
      };
    case "FETCH_HOMEWORLD_ERROR":
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
