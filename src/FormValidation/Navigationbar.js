import React from 'react'
import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';


 
var style = {
    color: 'brown',
    
  };

class NavigationBar extends React.Component
{
  
    constructor()
    {
        super()
    }
    render()
    {
          return(
            <Navbar bg="dark" variant="dark" >
                <Navbar.Brand as={Link} to="/">Bhargav's App</Navbar.Brand>
                <Nav className="mr-auto">
                {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
                 {/* <Nav.Link as={Link} to="/movieList">Movies</Nav.Link> */}
                </Nav>
            </Navbar>
          );
            }
}

export default NavigationBar;