import React, { Component } from 'react'
import './App.css'
import CourseForm from './components/course-form/course-form'
import CoursesList from './components/courses-list/courses-list'

// TODO: Clean Code
// TODO: Make Unit test
class App extends Component {
  state = {
    courses: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JQuery' }],
    current: '',
  }

  handleEditForm = e => {
    this.setState({ current: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { courses, current } = this.state
    const exist = courses.find(c => c.name.toLowerCase() === current.toLowerCase())

    // You can't add course is empty or exist before
    if (current === '' || !!exist) {
      return
    }

    courses.push({ name: current })
    console.log('courses', courses)
    this.setState({ courses, current: '' })
  }

  deleteCourse = index => {
    const { courses } = this.state
    courses.splice(index, 1)
    this.setState({ courses })
  }

  updateCourse = (index, value) => {
    const { courses } = this.state
    courses[index].name = value
    this.setState({ courses })
  }

  render() {
    const { courses } = this.state
    const coursesList = courses.map((course, index) => {
      return (
        <CoursesList
          course={course}
          key={index}
          index={index}
          delete={this.deleteCourse}
          update={this.updateCourse}
        />
      )
    })
    return (
      <section className="app">
        <h2 className="title">Manage Your Courses</h2>
        <CourseForm
          editCourse={this.handleEditForm}
          submitCourse={this.handleSubmit}
          courseName={this.state.current}
        />
        {coursesList.length > 0 ? <ul>{coursesList}</ul> : <p>There is no courses yet.</p>}
      </section>
    )
  }
}

export default App
