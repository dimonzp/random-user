import React from "react";
import noUser from "../../../assets/user.png";
import style from "./UserPage.module.scss";

const UserPage = (props) => {
  const { user } = props;
  return (
    <div className={style.userPage}>
      <div className={style.header}>
        <h1>User Detail</h1>
      </div>

      <div className={style.photo}>
        <img
          src={(user && user.picture && user.picture.large) || noUser}
          alt="large of user"
        ></img>
      </div>
      <div className={style.details}>
        <h3>{`${user && user.name && user.name.first} ${
          user && user.name && user.name.last
        }`}</h3>
        <p>{`Adress: ${user && user.location && user.location.street.number} ${
          user && user.location && user.location.street.name
        }`}</p>
        <p>{`email: ${user && user.email}`}</p>
        <p>{`Gender: ${user && user.gender}`}</p>
        <p>{`Date: ${
          user && user.dob && new Date(user.dob.date).toLocaleDateString()
        }`}</p>
        <p>{`Phone: ${user && user.phone}`}</p>
      </div>
    </div>
  );
};

export default UserPage;
