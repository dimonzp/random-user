import { takeEvery, put, call, all } from "redux-saga/effects";
import { usersAPI } from "../api/api";
import { LOAD_USERS, setIsFetching, setUsers } from "./users/actions";

//get users
function* workerLoadLogs() {
  try {
    yield put(setIsFetching(true));
    const users = yield call(usersAPI.getUsers);

    yield put(setIsFetching(false));
    yield put(setUsers(users));
  } catch (error) {
    console.log(error);
  }
}
function* watchLoadUsers() {
  yield takeEvery(LOAD_USERS, workerLoadLogs);
}

export default function* rootSaga() {
  yield all([watchLoadUsers()]);
}
