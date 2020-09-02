import { takeEvery, call, put } from "redux-saga/effects";
//-------------workers sagas--------------

const SEARCH_RESULT_SAGA = "SEARCH_RESULT_SAGA";
const SEARCH_RESULT = "SEARCH_RESULT";
//saga for getting results depending on a search word

export function* getSearchResults({ formValues }) {
  try {
    const response = yield call(
      BooksApi.getSearchResults,
      formValues.SearchField
    );
    yield put({ type: SEARCH_RESULT, payload: response.data.items });
  } catch {
    console.log("error");
  }
}

//-------------watchers sagas-------------
export default function* rootSaga() {
  yield takeEvery(SEARCH_RESULT_SAGA, getSearchResults);
}
