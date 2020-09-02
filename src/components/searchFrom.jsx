import React, { Component } from "react";
import { SearchButton } from "./searchButton";
import { SearchInput } from "./searchInput";
import { Formik } from "formik";
import { Typography, FormGroup, Grid } from "@material-ui/core";
import * as Yup from "yup";
export class SearchForm extends Component {
  renderForm = (formikProps) => {
    return (
      <form
        onSubmit={formikProps.handleSubmit}
        onChange={formikProps.handleChange}
      >
        <FormGroup>
          <Grid container>
            <Grid item xs={8}>
              <SearchInput />
            </Grid>
            <Grid item xs={3}>
              <SearchButton type="submit" />
            </Grid>
            <Grid item xs={12}>
              {formikProps.errors.bookName && (
                <Typography color="secondary">
                  {formikProps.errors.bookName}
                </Typography>
              )}
            </Grid>
          </Grid>
        </FormGroup>
      </form>
    );
  };
  render() {
    return (
      <Formik
        initialValues={{ bookName: "" }}
        onSubmit={() => console.log("submitted")}
        validationSchema={Yup.object().shape({
          bookName: Yup.string().required("Please Write a Book Name"),
        })}
      >
        {(formikProps) => this.renderForm(formikProps)}
      </Formik>
    );
  }
}
