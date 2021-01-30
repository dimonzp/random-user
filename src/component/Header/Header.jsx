import React from "react";
import { NavLink } from "react-router-dom";
import back from "../../assets/back.png";
import Clock from "../Clock/Clock";
import style from "./Header.module.scss";

const Header = (props) => {
  const { isUserPage, markedUsers } = props;
  return (
    <div className={style.header}>
      <div className={style.back}>
        {isUserPage && (
          <NavLink to={"/"}>
            <img className={style.image} alt="back arrow" src={back} />
          </NavLink>
        )}
      </div>
      <div className={style.markedUsers}>
        <p>Marked users count: {markedUsers.length ? markedUsers.length : 0}</p>
      </div>
      <div>
        <Clock />
        <div>
          {isUserPage && (
            <div>
              <div>Open time</div>
              <div>{new Date().toLocaleTimeString()}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
