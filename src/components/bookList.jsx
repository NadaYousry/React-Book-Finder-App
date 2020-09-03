import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "@material-ui/core";
import { SingleBookCard } from "./singleBookCard";
class BookList extends Component {
  renderList() {
    if (this.props.searchedBooks) {
      console.log(this.props.searchedBooks);
      console.log("response" + this.props.searchedBooks);
      return this.props.searchedBooks.map((book) => {
        return <SingleBookCard key={book.id} bookData={book} />;
      });
    } else {
      return <Card>no such result</Card>;
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
