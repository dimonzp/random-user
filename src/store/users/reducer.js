import {
  MARK_USER,
  SET_IS_FETCHING,
  SET_IS_USER_PAGE,
  SET_USERS,
  SET_USER_PAGE,
  UNMARK_USER,
} from "./actions";

const initialState = {
  users: [],
  markedUsers: [],
  userPage: {},
  isFetching: false,
  isUserPage: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users.results] };
    }
    case MARK_USER: {
      const newMark = { id: action.id, time: action.time };
      return { ...state, markedUsers: [...state.markedUsers, newMark] };
    }
    case UNMARK_USER: {
      const markedUsers = state.markedUsers.filter((mu) => mu.id !== action.id);
      return { ...state, markedUsers };
    }
    case SET_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case SET_USER_PAGE: {
      const userPage = state.users.find((u) => u.login.uuid === action.id);
      return { ...state, userPage };
    }
    case SET_IS_USER_PAGE: {
      return { ...state, isUserPage: action.isUserPage };
    }

    default:
      return state;
  }
};

export default usersReducer;
