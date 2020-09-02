import React, { Component } from "react";
import { SearchButton } from "./searchButton";
import { SearchInput } from "./searchInput";
import { Formik } from "formik";
import { Typography } from "@material-ui/core";
export class SearchForm extends Component {
  renderForm = (formikProps) => {
    // console.log(formikProps);
    return (
      <form
        onSubmit={formikProps.handleSubmit}
        onChange={formikProps.handleChange}
      >
        <SearchInput />
        <SearchButton type="submit" />
      </form>
    );
  };
  render() {
    return (
      <Formik
        initialValues={{ bookName: "" }}
        onSubmit={() => console.log("submitted")}
      >
        {(formikProps) => this.renderForm(formikProps)}
      </Formik>
    );
  }
}
