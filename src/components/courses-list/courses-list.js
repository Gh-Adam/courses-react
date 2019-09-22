import React, { Component, Fragment } from "react";

class CoursesList extends Component {
  render() {
    return (
      <Fragment>
        <li> {this.props.course.name}</li>
      </Fragment>
    );
  }
}

export default CoursesList;
