import React from "react";
import "./App.css";
import { SearchForm } from "./../components/searchFrom";
import { Container } from "@material-ui/core";
function App() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <h1>Book Finder</h1>
        <div>
          <SearchForm />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
