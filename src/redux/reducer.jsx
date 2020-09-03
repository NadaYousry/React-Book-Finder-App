import { RequestApiBook } from "./actions";
const Reducer = (state = {}, action) => {
  switch (action.type) {
    case RequestApiBook:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};
export default Reducer;
