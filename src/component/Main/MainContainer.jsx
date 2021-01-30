import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  loadUsers,
  markUser,
  setIsUserPage,
  unmarkUser,
  setUserPage,
} from "../../store/users/actions";
import style from "./MainContainer.module.scss";
import MarkedUsers from "./MarkedUsers/MarkedUsers";
import Users from "./Users/Users";

const MainContainer = (props) => {
  const {
    loadUsers,
    markUser,
    users,
    userPage,
    setUserPage,
    markedUsers,
    unmarkUser,
    isFetching,
  } = props;
  useEffect(() => {
    if (users.length === 0) {
      loadUsers();
    }
  }, [loadUsers, users.length]);
  return (
    <div className={style.main}>
      <div className={style.users}>
        <Users
          {...props}
          users={users}
          userPage={userPage}
          markUser={markUser}
          unmarkUser={unmarkUser}
          setUserPage={setUserPage}
          loadUsers={loadUsers}
          isFetching={isFetching}
        />
      </div>
      <div className={style.users}>
        <MarkedUsers {...props} markedUsers={markedUsers} users={users} />
      </div>
    </div>
  );
};
let mapStateToProps = (state) => {
  const { markedUsers, userPage, users, isFetching } = state.usersPage;
  return { markedUsers, userPage, users, isFetching };
};

export default compose(
  connect(mapStateToProps, {
    loadUsers,
    markUser,
    unmarkUser,
    setIsUserPage,
    setUserPage,
  })
)(MainContainer);
