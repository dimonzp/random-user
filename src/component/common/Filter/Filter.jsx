import React from "react";
import style from "./Filter.module.scss";

const Filter = (props) => {
  return (
    <div className={style.group}>
      <input
        type="text"
        placeholder="Firsname, Lastname"
        onChange={props.onChangeHandler}
      />
      <span className={style.bar}></span>
      <label>Filter by</label>
    </div>
  );
};

export default Filter;
