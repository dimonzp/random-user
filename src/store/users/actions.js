export const LOAD_USERS = "LOAD_USERS";
export const SET_USERS = "SET_USERS";

export const MARK_USER = "MARK_USER";
export const UNMARK_USER = "UNMARK_USER";

export const SET_USER_PAGE = "SET_USER_PAGE";

export const SET_IS_FETCHING = "SET_IS_FETCHING";

export const SET_IS_USER_PAGE = "SET_IS_USER_PAGE";

export const loadUsers = () => ({ type: LOAD_USERS });
export const setUsers = (users) => ({ type: SET_USERS, users });

export const markUser = (id, time) => ({ type: MARK_USER, id, time });
export const unmarkUser = (id) => ({ type: UNMARK_USER, id });

export const setUserPage = (id) => ({ type: SET_USER_PAGE, id });

export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});

export const setIsUserPage = (isUserPage) => ({
  type: SET_IS_USER_PAGE,
  isUserPage,
});
