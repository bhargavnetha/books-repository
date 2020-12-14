import React, { Component } from 'react'
import {Card, Table, Form, Button, Col} from 'react-bootstrap'
import Footer from './Footer'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSave, faPlusSquare, faUndo, faList, faEdit} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import MyToast from './MyToast'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

const sucessNotify = () =>{
   toast('book submited')     
} 

export class Book extends Component {

    

    constructor(props){
        super(props);
        this.state=this.initialState;
        this.bookChange=this.bookChange.bind(this);
        this.submitBook=this.submitBook.bind(this);
    }

    initialState ={
       id:'', title:'',author:'', coverPhotoURL:'', isbnNumber:'', price:'', language:''
    }

    componentDidMount(){
        const bookId = +this.props.match.params.id;
        if(bookId){
           this.findBookById(bookId);
        }

    }

    findBookById=(bookId)=>{
        axios.get("http://localhost:1234/rest/books/"+bookId)
        .then(response=>{
            if(response.data!=null){
                this.setState({
                    id:response.data.id,
                    title:response.data.title,
                    author:response.data.author,
                    coverPhotoURL:response.data.coverPhotoURL,
                    isbnNumber:response.data.isbnNumber,
                    price:response.data.price,
                    language:response.data.language
                })
            }
        }).catch((error)=>{
            console.error("error"+error)
        });
    }

    submitBook(event){
      //  alert('good');
        event.preventDefault();

        const book = {
            title:this.state.title,
            author:this.state.author,
            coverPhotoURL:this.state.coverPhotoURL,
            isbnNumber:this.state.isbnNumber,
            price:this.state.price,
            language:this.state.language
        }

        axios.post("http://localhost:1234/rest/books", book)
        .then(response=>{
            if(response.data!=null){
                this.setState(this.initialState);
                alert("Book saved sucessfully")
            }
        })
            

    }


//

updateBook(event){
    //  alert('good');
      event.preventDefault();

      const book = {
          id:this.state.id,
          title:this.state.title,
          author:this.state.author,
          coverPhotoURL:this.state.coverPhotoURL,
          isbnNumber:this.state.isbnNumber,
          price:this.state.price,
          language:this.state.language
      }

      axios.put("http://localhost:1234/rest/books", book)
      .then(response=>{
          if(response.data!=null){
              this.setState(this.initialState);
              alert("Book updated sucessfully")
          }
      })
          

  }




    resetBook =() =>{
        this.setState(()=>this.initialState)
    }

    bookChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    bookList=()=>{
        return this.props.history.push("/list")
    };

    render() {

        const {title, author, coverPhotoURL, isbnNumber, price, language} = this.state

        return (
            <div>
            <div>
                {/* <MyToast/> */}
            </div>
            <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header><FontAwesomeIcon icon={this.state.id ? faEdit: faPlusSquare}/>{this.state.id ? "Update new Book" : " Save"}</Card.Header>
            <Form onReset={this.resetBook} onSubmit={this.submitBook} onUpdate={this.updateBook} id="bookFormId">
            <Card.Body>
                <Form.Row>
                <Form.Group as={Col} controlId="formGridTitle">
                    <Form.Label>Title</Form.Label>
                     <Form.Control required
                        type="text" name="title"
                        value={title}
                        onChange={this.bookChange}
                        className={"bg-dark text-white"}
                        placeholder="Enter Book Title" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAuthor">
                    <Form.Label>Author</Form.Label>
                     <Form.Control required autoComplete="off"
                        type="text" name="author"
                        value={author}
                        onChange={this.bookChange}
                        className={"bg-dark text-white"}
                        placeholder="Enter book Author" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCoverPhotoURL">
                    <Form.Label>Cover Photo URL</Form.Label>
                     <Form.Control required autoComplete="off"
                        type="text" name="coverPhotoURL"
                        value={coverPhotoURL}
                        onChange={this.bookChange}
                        className={"bg-dark text-white"}
                        placeholder="Enter Cover Photo URL" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridISBNNumber">
                    <Form.Label>ISBN Number</Form.Label>
                     <Form.Control required autoComplete="off"
                        type="text" name="isbnNumber"
                        value={isbnNumber}
                        onChange={this.bookChange}
                        className={"bg-dark text-white"}
                        placeholder="Enter ISBN Number" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPrice">
                    <Form.Label>Price</Form.Label>
                     <Form.Control required autoComplete="off"
                        type="text" name="price"
                        value={price}
                        onChange={this.bookChange}
                        className={"bg-dark text-white"}
                        placeholder="Enter Price" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLanguage">
                    <Form.Label>Language</Form.Label>
                     <Form.Control required autoComplete="off"
                        type="text" name="language"
                        value={language}
                        onChange={this.bookChange}
                        className={"bg-dark text-white"}
                        placeholder="Enter Language" />
                </Form.Group>
            </Form.Row>
                <Button size="sm" variant="success" type="submit">
                <FontAwesomeIcon icon={faSave}/>{this.state.id ? "Update" : " Save"}
                </Button> {' '}

                <Button size="sm" variant="info" type="reset">
                <FontAwesomeIcon icon={faUndo}/> Reset
                </Button> {' '}

                <Button size="sm" variant="info" type="button" onClick={this.bookList.bind()}>
                <FontAwesomeIcon icon={faList}/> BookList
                </Button>
                
            </Card.Body>
            </Form>
        </Card> 
        <Footer/>
        </div>
        )
    }
}

export default Book
