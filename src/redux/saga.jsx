import { takeEvery, call, put } from "redux-saga/effects";
import { RequestApiBook, ResponseFromApiBook } from "./actions";
import axios from "axios";

//-------------workers sagas will be fired on RequestApiBook--------------//

// Api Request
const getSearchResults = async (searchTerm) =>
  await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}+terms`
  );

export function* getApiData(action) {
  let typeOfresponse = "";
  try {
    const response = yield call(getSearchResults, action.data.bookName);
    // add new key and check if there is any data from response or not
    if (response.data.totalItems !== 0) {
      yield put({ type: RequestApiBook, payload: response.data.items });
      return (typeOfresponse = ResponseFromApiBook);
    } else {
      yield put({ type: RequestApiBook, payload: null });
      return (typeOfresponse = ResponseFromApiBook);
    }
  } catch (e) {
    console.log(`${e} there is error`);
  }
}

//-------------watchers sagas-------------//
export default function* Saga() {
  yield takeEvery(ResponseFromApiBook, getApiData);
}
