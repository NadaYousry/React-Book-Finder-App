import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextField } from "@material-ui/core";
export class SearchInput extends Component {
  render() {
    return (
      <Formik>
        <TextField
          id="outlined-secondary"
          label="Search For a Book"
          variant="outlined"
          size="small"
        />
      </Formik>
    );
  }
}
