import React from 'react';
import {Link} from "react-router-dom"
import './style.css';
// import {BrowserRouter, Router, Route} from 'react-router-dom';

class Students extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            studs : [],
            name: "",
            age: "",
            course: "",
            batch: "",
            show: false
        }
    }

    showTable = (l) => {
        if(l == 0) {
            return null;
        }

        let val = [];

        for(let i = 0; i < l; i++) {

            val.push(<div className="i1">{this.props.stud[i][0]}</div>);
            val.push(<div className="i1">{this.props.stud[i][1]}</div>);
            val.push(<div className="i1">{this.props.stud[i][2]}</div>);
            val.push(<div className="i1">{this.props.stud[i][3]}</div>);

            val.push(<div className="i1 ">

                </div>);

        }

    return val;
     
    }
    render() {
        return(
            <div>
                    <div id="Head">
                        <div>
                            <h1 id="T1">Student Details</h1>
                        </div>
                        <div>
                            <Link to="add"><button onClick={this.show} id="Addstud">Add new Student</button></Link> 
                        </div>

                        <div id="Table">
                            <div className="i1"><strong>Name</strong> </div>
                            <div className="i1"><strong>Age</strong></div>
                            <div className="i1"><strong>Course</strong></div>
                            <div className="i1"><strong>Batch</strong></div>
                            <div className="i1"><strong>Edit</strong></div>
                            
                            {this.showTable(this.props.stud.length)}
                        </div>
                    </div>

                
            </div>
        );
    }
}


export default Students;