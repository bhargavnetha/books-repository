

import FormValidation from './FormValidation/FormValidation';
import { render } from 'react-dom';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import React from 'react'
import NavigationBar from './components/NavigationBar'
import { Container, Row, Jumbotron, Col} from 'react-bootstrap';
import nav from './components/NavigationStyle.css'
import Welcome from './components/Welcome';
import Footer from './components/Footer'
import Book from './components/Book';
import UserList from './components/UserList';
import BookList from './components/BookList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
   <Router>
    <NavigationBar/>
    <Container>
      <Row>
        <Col className="marginTop">
          <Switch>
            <Route path="/" exact component={Welcome}/>
            <Route path="/add" exact component={Book}/>
            <Route path="/edit/:id" exact component={Book}/>
            <Route path="/list" exact component={BookList}/>
            <Route path="/users" exact component={UserList}/>
          </Switch>
          {/* <Welcome/>
          <Book/>
          <BookList/> */}
        </Col>
      </Row>
    </Container>
    <Footer/>
    </Router>
  )
}

export default App
