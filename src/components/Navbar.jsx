import './style.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav style">
            <div> <Link to="/">Home</Link></div>
            <div> <Link to="/students">Students</Link></div>
            <div> <Link to="/contact">Contact us</Link>
            </div>
        
        </div>
    );
}
export default  Navbar;