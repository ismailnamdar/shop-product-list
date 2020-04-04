import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { API_BASE_URL } from "../configs/constants";
import { ACTIONS, getFailAction, getSuccessAction } from "./actions";

// eslint-disable-next-line no-underscore-dangle
const _axios = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  responseType: "json",
});
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetch(action) {
  const { method, params, path, type } = action.payload;
  try {
    const { data } = yield call(_axios, {
      method,
      params,
      url: path,
    });
    yield put({ type: getSuccessAction(type), payload: { data } });
  } catch (error) {
    yield put({ type: ACTIONS.HTTP_ERROR, payload: { error } });
    yield put({ type: getFailAction(type), payload: { error } });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* watcher() {
  yield takeEvery("HTTP_REQUEST", fetch);
}

export default watcher;
