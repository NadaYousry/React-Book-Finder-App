import React from "react";
import "./App.css";
import SearchForm from "./../components/searchFrom";
import { Container } from "@material-ui/core";
import BookList from "../components/bookList";
function App() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <h1>Book Finder</h1>
        <div>
          <SearchForm />
        </div>
        <div>
          <BookList />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
