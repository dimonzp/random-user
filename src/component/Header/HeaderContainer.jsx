import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Header from "./Header";

const HeaderContainer = (props) => {
  const { isUserPage, markedUsers } = props;
  return (
    <Header {...props} isUserPage={isUserPage} markedUsers={markedUsers} />
  );
};

let mapStateToProps = (state) => {
  const { isUserPage, markedUsers } = state.usersPage;
  return { isUserPage, markedUsers };
};

export default compose(connect(mapStateToProps))(HeaderContainer);
