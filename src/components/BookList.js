import React, { Component } from 'react'
import {Card, Table, Image, Button, ButtonGroup} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Book from './Book'
import { toast } from 'react-toastify'
import {Link} from 'react-router-dom'


toast.configure()

const deleteNotify = () =>{ 
   toast('book deleted')     
} 

export class BookList extends Component {

    constructor(props){
        super(props);
        this.state={
            books:[]
        }
    }

    componentDidMount(){
        this.findAllBooks();
    }

    findAllBooks(){
        axios.get("http://localhost:1234/test?page=0&size=2")
        .then(response=>response.data)
        .then((data)=> {
            this.setState({books: data.content});
        } );
    }

    deleteBook =(bookId)=>{
       axios.delete("http://localhost:1234/delete/books/"+bookId)
       .then(response=>{
           if(response.data != null){
               alert("book has deleted sucessfully")
               toast('book deleted')   
               this.setState({
                   books:this.state.books.filter(book => book.id !== bookId)
               })
           }
       })
    };

    render() {
        return (
            
               
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faList}/>Book List</Card.Header>
                    <Card.Body>
                        <Table bordered hover striped varient="dark" className= {"text-white"}>
                        <thead>
    <tr>
      <th>Title</th>
      <th>Authour</th>
      <th>ISBN Number</th>
      <th>Price</th>
      <th>Language</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {this.state.books.length===0 ?
        <tr align="center">
            <td colSpan="6">No books available</td>
        </tr>:
        this.state.books.map((b)=>(
            <tr key={b.id}>
                <td>
                    <Image src={b.coverPhotoURL} roundedCircle width="25" height="25"/>
                    {b.title}
                </td>
                <td>{b.author}</td>
                <td>{b.isbnNumber}</td>
                <td>{b.price}</td>
                <td>{b.language}</td>
                <td>
                    <ButtonGroup>
                        <Link to={"edit/"+b.id}  className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit}/></Link>{' '}
                        {/* <Button size="sm" varient="outline-primary"><FontAwesomeIcon icon={faEdit}/></Button> */}
                        <Button size="sm" varient="outline-danger" onClick={this.deleteBook.bind(this, b.id)}><FontAwesomeIcon icon={faTrash}/></Button>
                    </ButtonGroup>
                </td>
            </tr>
        ))
    }
  </tbody>
                        </Table>
                    </Card.Body>
                </Card>
                
            
        )
    }
}

export default BookList
