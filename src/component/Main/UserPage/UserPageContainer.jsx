import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { setIsUserPage, setUserPage } from "../../../store/users/actions";
import UserPage from "./UserPage";

const UserPageContainer = (props) => {
  useEffect(() => {
    const id = props.match.params.id;
    props.setUserPage(id);
    props.setIsUserPage(true);
    return () => {
      props.setIsUserPage(false);
    };
  }, [props]);

  const { userPage } = props;
  return <UserPage {...props} user={userPage} />;
};

let mapStateToProps = (state) => {
  const { userPage } = state.usersPage;
  return { userPage };
};

export default compose(
  connect(mapStateToProps, { setUserPage, setIsUserPage }),
  withRouter
)(UserPageContainer);
