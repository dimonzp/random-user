import React, { useEffect, useState } from "react";
import { filter } from "../../../utils/filter";
import Filter from "../../common/Filter/Filter";
import UserCard from "../UserCard/UserCard";
import style from "../Users/Users.module.scss";

const MarkedUsers = (props) => {
  const { markedUsers, users } = props;

  const marked = markedUsers.map((mu) => {
    return users.find((u) => u.login.uuid === mu.id);
  });

  const [filtredWord, setFiltredWord] = useState("");
  const [filtredUsers, setFiltredUsers] = useState([]);

  useEffect(() => {
    if (filtredWord === "") {
      setFiltredUsers(marked);
    } else setFiltredUsers(filter(marked, filtredWord));
  }, [filtredWord, markedUsers]);

  const onChangeHandler = (e) => {
    setTimeout(setFiltredWord, 250, e.target.value);
  };

  return (
    <div>
      <div className={style.userCard}>
        <h1 className={style.p}>Marked Users</h1>
        <Filter {...props} onChangeHandler={onChangeHandler} />
        {filtredUsers.map((user) => {
          return (
            <div className={style.user} key={user.login.uuid}>
              <UserCard
                {...props}
                picture={user.picture.thumbnail}
                firstName={user.name.first}
                lastName={user.name.last}
                id={user.login.uuid}
                isMarkedUsers={true}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarkedUsers;
