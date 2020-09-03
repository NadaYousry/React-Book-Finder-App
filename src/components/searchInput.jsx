import React, { Component } from "react";
import { TextField } from "@material-ui/core";
export class SearchInput extends Component {
  render() {
    return (
      <TextField
        name="bookName"
        label="Search For a Book"
        variant="outlined"
        size="small"
        fullWidth
      />
    );
  }
}
