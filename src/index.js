import React from "react";
import ReactDOM from "react-dom";
import MovieList from './MovieList'
import Nav from './Nav'
import "./styles.css";
import { MovieProvider } from './MovieConText'
import AddMovie from './AddMovie'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList /> 
      </div>
    </MovieProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
