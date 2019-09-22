import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import CourseForm from "./components/course-form/course-form";
import CoursesList from "./components/courses-list/courses-list";

class App extends Component {
  state = {
    courses: [{ name: "HTML" }, { name: "CSS" }, { name: "JQuery" }]
  };
  render() {
    const { courses } = this.state;
    const coursesList = courses.map((course, index) => {
      return (
        // <div>
        //   {index} - {course.name}
        // </div>
        <CoursesList course={course} key={index} />
      );
    });
    return (
      <section className="App">
        <h2>Manage Your Courses</h2>
        <CourseForm />
        <ul>{coursesList}</ul>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </section>
    );
  }
}

export default App;
