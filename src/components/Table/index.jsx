import React from "react";
import style from "./Table.module.scss";
import { Link } from "react-router-dom";

const Table = ({ handle }) => {
  return (
    <>
      <Link to="userTable">
        <h1>click</h1>
      </Link>
      <button onClick={() => handle()}>click</button>
    </>
  );
};

export default Table;
