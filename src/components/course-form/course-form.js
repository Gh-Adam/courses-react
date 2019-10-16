import React from 'react'

// TODO: Can't add an empty course
// TODO: Can't add Exist Course Again
const courseForm = props => {
  return (
    <form onSubmit={props.submitCourse}>
      <input
        type="text"
        placeholder="Enter course name"
        onChange={props.editCourse}
        value={props.courseName}
      />
      <button className="btn-green" type="submit">
        Submit Course
      </button>
    </form>
  )
}

export default courseForm
