import React, { Component } from "react";
import { Button } from "@material-ui/core";
export class SearchButton extends Component {
  render() {
    return (
      <Button variant="contained" color="primary" size="large">
        Search
      </Button>
    );
  }
}
