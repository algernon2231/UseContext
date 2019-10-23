import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieConText";
import uuid from "uuid/v1";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);
  const updateName = e => {
    setName(e.target.value);
  };
  const updatePrice = e => {
    setPrice(e.target.value);
  };
  const addMovie = e => {
    e.preventDefault();

    setMovies(prevMovies => [
      ...prevMovies,
      { name: name, price: price, id: uuid() }
    ]);
    setName("");
    setPrice("");
  };
  return (
    <form onSubmit={addMovie}>
      <input type="text" name="movie" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button type="Submit">Submit</button>
    </form>
  );
};

export default AddMovie;
