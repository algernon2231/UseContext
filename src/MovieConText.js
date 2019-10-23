import React, { useState, createContext } from "react";
import uuid from "uuid/v1";
export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    { name: "Harry Potter", price: "$10", id: uuid() },
    { name: "Game of Thrones", price: "$10", id: uuid() },
    { name: "Inception", price: "$10", id: uuid() }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
