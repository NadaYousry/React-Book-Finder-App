import React, { Component } from "react";
import { connect } from "react-redux";

class BookList extends Component {
  renderList() {
    if (this.props.searchedBooks) {
      console.log(this.props.searchedBooks);
      console.log("response" + this.props.searchedBooks);
    } else {
      return <div>no such result</div>;
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
