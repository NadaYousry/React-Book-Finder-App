import React, { Component } from "react";
import { SearchButton } from "./searchButton";
import { SearchInput } from "./searchInput";
export class SearchForm extends Component {
  render() {
    return (
      <div>
        <SearchInput />
        <SearchButton />
      </div>
    );
  }
}
