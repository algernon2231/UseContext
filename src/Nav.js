import React, { useContext } from "react";
import { MovieContext } from "./MovieConText";
const Nav = () => {
  const movies = useContext(MovieContext);
  return (
    <div>
      <h2>Do Ngoc Anh</h2>
      <p>List of movies:{movies.length} </p>
    </div>
  );
};

export default Nav;
