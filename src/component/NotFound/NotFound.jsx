import React from "react";
import { Link } from "react-router-dom";
import style from "./NotFound.module.scss";

const NotFound = () => (
  <div className={style.notFound}>
    <h1>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;
