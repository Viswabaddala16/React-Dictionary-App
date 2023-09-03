import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <h1>Dictionary App</h1>
            <ul>
                <li><Link to='/'><p><a href="#">Home</a></p></Link></li>
                <li><Link to='/history'><p><a href="#">History</a></p></Link></li>
            </ul>


            </nav>
    )
}
export default Navbar;