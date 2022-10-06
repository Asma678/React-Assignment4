import './style.css';
import React from 'react';
import {Link} from 'react-router-dom';


class AddStud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students : []
        }
    }

    update = () => {
        let arr = this.props.stud;

        let a = document.getElementById("x");
        let b = document.getElementById("y");
        let c = document.getElementById("z");
        let d = document.getElementById("p");

        let name = a.value, age = b.value, course = c.value, batch = d.value;
        let temp = [name, age, course, batch];
        arr.push(temp);
        this.props.method(temp);

    }

    render() {
        return(
            <div>
                <div className='input'>
                    <div>
                        <fieldset><legend>Name</legend>
                            <input   id ="x" className='f1' type="text" />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset><legend>Age</legend>
                        <input id ="y" className='f1' type="text" />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset><legend>Course</legend>
                        <input id ="z" className='f1' type="text" />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset><legend>Batch</legend>
                        <input id ="p" className='f1' type="text" />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset><legend>Edit</legend>
                        <input id ="p" className='f1' placeholder='edit' />
                        </fieldset>
                    </div>
                </div>

                <div className="f3">
                    <Link to="/students"><button className='c3' id='Addstud'>Cancel</button></Link>
                    <Link to="/students"><button className='c4' onClick={this.update} id='Addstud'>Update</button></Link>
                </div>
                

            </div>
        );
    }
}

export default AddStud;