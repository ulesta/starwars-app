export const peopleInitialState = {
  people: [],
  loading: true,
  error: null,
  count: null,
};

export const peopleReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PAGE":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        count: action.count,
        people: action.people,
        loading: false,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
