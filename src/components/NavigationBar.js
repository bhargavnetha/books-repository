import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import nav from './NavigationStyle.css'
import {Link} from 'react-router-dom';

export class NavigationBar extends Component {
    render() {
        return (
            // <div>
                 <Navbar bg="dark" variant="dark">
                 <Link to={""} className="navbar-brand">
                    <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" width="30" height="30" alt="brand"/>Book Shop
                 </Link>
                        <Nav className="mr-auto">
                            <Link to={"add"}  className="nav-link">Add Book</Link>
                            <Link to={"list"} className="nav-link">Book List</Link>
                            <Link to={"users"} className="nav-link">User List</Link>
                        </Nav>
                 </Navbar>
            // </div>
        )
    }
}

export default NavigationBar
