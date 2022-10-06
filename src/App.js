import "./components/style.css"

import React from 'react';
import {BrowserRouter, json, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Students from './components/Students';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Add from "./components/AddStud"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      students : [],
      currentName: "",
      currentAge: "",
      currentCourse: "",
      currentBatch: ""
    } 
  }

  updateStudents = (s) => {
      this.setState({student: s});
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students stud={this.state.students}/>} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/students/add" element={<Add stud={this.state.students} method={this.updateStudents} current={this.currentStudent}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
  
}

export default App;