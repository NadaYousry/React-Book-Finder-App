import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Container } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { SingleBookCard } from "./singleBookCard";
class BookList extends Component {
  renderList() {
    if (this.props.searchedBooks) {
      return this.props.searchedBooks.map((book) => {
        return <SingleBookCard key={book.id} bookData={book} />;
      });
    } else if (this.props.searchedBooks === null) {
      return <Alert severity="warning">There Is No Data To Show</Alert>;
    }
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    searchedBooks: state.books,
  };
};

export default connect(mapStateToProps)(BookList);
