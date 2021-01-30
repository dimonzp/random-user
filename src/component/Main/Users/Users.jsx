import React, { useEffect, useState } from "react";
import { filter } from "../../../utils/filter";
import Filter from "../../common/Filter/Filter";
import Preloader from "../../common/Preloader/Preloader";
import UserCard from "../UserCard/UserCard";
import style from "./Users.module.scss";

const Users = (props) => {
  const {
    isFetching,
    markUser,
    users,
    markedUsers,
    unmarkUser,
    loadUsers,
  } = props;

  const [filtredWord, setFiltredWord] = useState("");
  const [filtredUsers, setFiltredUsers] = useState([]);

  useEffect(() => {
    if (filtredWord === "") {
      setFiltredUsers(users);
    } else setFiltredUsers(filter(users, filtredWord));
  }, [filtredWord, users]);

  const onChangeHandler = (e) => {
    setTimeout(setFiltredWord, 250, e.target.value);
  };

  return (
    <div className={style.userCard}>
      <h1 className={style.p}>Users</h1>
      <Filter {...props} onChangeHandler={onChangeHandler} />

      {filtredUsers.map((user) => {
        return (
          <div className={style.user} key={user.login.uuid}>
            <UserCard
              {...props}
              id={user.login.uuid}
              picture={user.picture.thumbnail}
              firstName={user.name.first}
              lastName={user.name.last}
              markedUsers={markedUsers}
              unmarkUser={unmarkUser}
              markUser={markUser}
            />
          </div>
        );
      })}
      {isFetching && <Preloader />}
      <div>
        {filtredWord.length === 0 && (
          <button className={style.loadMore} onClick={loadUsers}>
            More
          </button>
        )}
      </div>
    </div>
  );
};
export default Users;
