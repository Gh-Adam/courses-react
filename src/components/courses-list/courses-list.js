import React, { Component, Fragment } from 'react'

class CoursesList extends Component {
  state = {
    isEdit: false,
  }

  renderCourse = () => {
    return (
      <li>
        {this.props.course.name}
        <button
          className="btn-gray"
          onClick={() => {
            this.toggleIsEdit()
          }}
        >
          Edit Course
        </button>
        <button
          className="btn-red"
          onClick={() => {
            this.props.delete(this.props.index)
          }}
        >
          Delete Course
        </button>
      </li>
    )
  }

  toggleIsEdit = () => {
    const { isEdit } = this.state
    this.setState({ isEdit: !isEdit })
  }
  submitUpdateForm = e => {
    e.preventDefault()
    if (this.input.value) {
      this.props.update(this.props.index, this.input.value)
    }
    // update state
    this.toggleIsEdit()
  }

  renderUpdateForm = () => {
    return (
      <form onSubmit={this.submitUpdateForm}>
        <input
          type="text"
          defaultValue={this.props.course.name}
          ref={val => {
            this.input = val
          }}
        />
        <button type="submit">Update Now</button>
      </form>
    )
  }

  render() {
    const { isEdit } = this.state
    return <Fragment>{isEdit ? this.renderUpdateForm() : this.renderCourse()}</Fragment>
  }
}

export default CoursesList
