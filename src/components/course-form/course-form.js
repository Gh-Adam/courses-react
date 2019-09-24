import React from "react";

const courseForm = props => {
  return (
    <form onSubmit={props.submitCourse}>
      <input
        type="text"
        placeholder="Enter course name"
        onChange={props.editCourse}
        value={props.courseName}
      />
      <button type="submit">Submit Course</button>
    </form>
  );
};

export default courseForm;
