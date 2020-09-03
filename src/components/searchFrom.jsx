import React, { Component } from "react";
import { SearchButton } from "./searchButton";
import { SearchInput } from "./searchInput";
import { Formik } from "formik";
import { Typography, FormGroup, Grid, Box } from "@material-ui/core";
import * as Yup from "yup";
import { serchOutput } from "../redux/actions";
import { connect } from "react-redux";
class SearchForm extends Component {
  renderForm = (formikProps) => {
    console.log(this.props.serchOutput);
    return (
      <Box mb={5}>
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
      </Box>
    );
  };

  onSubmitForm = (formValues) => {
    if (formValues) {
      this.props.searchResult(formValues);
    }
  };
  render() {
    return (
      <Formik
        initialValues={{ bookName: "" }}
        onSubmit={(data) =>
          console.log("submitted", this.props.serchOutput(data))
        }
        validationSchema={Yup.object().shape({
          bookName: Yup.string().required("Please Write a Book Name"),
        })}
      >
        {(formikProps) => this.renderForm(formikProps)}
      </Formik>
    );
  }
}

export default connect(null, { serchOutput })(SearchForm);
