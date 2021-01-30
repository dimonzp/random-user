import React from "react";
import { Link } from "react-router-dom";
import style from "./UserCard.module.scss";

const UserCard = (props) => {
  const {
    id,
    picture,
    firstName,
    lastName,
    markedUsers,
    unmarkUser,
    markUser,
    isMarkedUsers = false,
  } = props;

  const isMarked = (id) => {
    return !!markedUsers.find((mu) => mu.id === id);
  };

  const getMarkedTime = (id) => {
    const user = markedUsers.find((mu) => mu.id === id);
    return user.time.toLocaleTimeString();
  };

  return (
    <div className={style.user}>
      <Link to={"/user/" + id}>
        <img className={style.avaIcon} src={picture} alt="user avatar" />
      </Link>

      <div>
        <Link to={"/user/" + id}>
          <div>{`${firstName} ${lastName}`}</div>
        </Link>
        <p className={style.id}>{id}</p>
      </div>

      {!isMarkedUsers && (
        <div className={style.but}>
          <button
            onClick={
              isMarked(id)
                ? () => unmarkUser(id)
                : () => markUser(id, new Date())
            }
            className={isMarked(id) ? style.marked : style.unmarked}
          >
            {isMarked(id) ? "Unmark" : "Mark"}
          </button>
          <p>{isMarked(id) && getMarkedTime(id)}</p>
        </div>
      )}
    </div>
  );
};

export default UserCard;
