import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
} from "@material-ui/core";
export class SingleBookCard extends Component {
  // to make sure that all data fetched to prevent undefined data
  renderImage = () => {
    if (this.props.bookData.volumeInfo.imageLinks.smallThumbnail) {
      return (
        <CardMedia
          component="img"
          image={this.props.bookData.volumeInfo.imageLinks.smallThumbnail}
          title={this.props.bookData.volumeInfo.title}
        />
      );
    }
  };
  renderBookTitle = () => {
    if (this.props.bookData.volumeInfo.title) {
      return (
        <Typography variant="h4">
          {this.props.bookData.volumeInfo.title}
        </Typography>
      );
    }
  };
  renderAuthorName = () => {
    if (this.props.bookData.volumeInfo.authors) {
      return (
        <Typography variant="subtitle1" color="primary">
          {this.props.bookData.volumeInfo.authors}
        </Typography>
      );
    }
  };
  renderDescription = () => {
    if (this.props.bookData.volumeInfo.publisher) {
      return (
        <Typography color="textSecondary">
          {this.props.bookData.volumeInfo.publisher}
        </Typography>
      );
    }
  };
  render() {
    console.log(this.props.bookData);
    return (
      <Box mb={5}>
        <Card>
          <Box display="flex">
            <Box width="80%" flexGrow={1}>
              <CardContent>
                {this.renderBookTitle()}
                {this.renderAuthorName()}
                {this.renderDescription()}
              </CardContent>
            </Box>
            <Box width="20%">{this.renderImage()}</Box>
          </Box>
        </Card>
      </Box>
    );
  }
}
