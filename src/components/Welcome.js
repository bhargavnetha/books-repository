import React, { Component } from 'react'
import { Container, Row, Jumbotron, Col} from 'react-bootstrap';

export class Welcome extends Component {
    render() {
        return (
            <div className="centere">
        <Jumbotron className="bg-dark text-white" >
         <h1>Bhargav's</h1>
         <blockquote className="blockquote mb-O" >
         <p>
           A relationship is only made for two, But some people don't know how to count!
        </p>
        <footer className="blockquote-footer" >
            Bhargav Netha
        </footer>
         </blockquote>
        </Jumbotron>
        </div>
        )
    }
}

export default Welcome
