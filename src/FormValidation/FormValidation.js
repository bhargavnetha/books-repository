import {Formik} from 'formik'
import * as EmailValidator from 'email-validator'
import * as Yup from 'yup'
import NavigationBar  from './Navigationbar';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Axios from 'axios'
import {Form,Button,Container,} from 'react-bootstrap'
import React, { Component } from 'react'

toast.configure()
const errornotify = () => toast.error("WRONG PASSWORD", {position:toast.POSITION.TOP_CENTER});

export class FormValidation extends Component {
    constructor()
    {
        super();
        this.state={
         email:'',
         password:'',
         respo:''
        };
    }

    onChange=(e)=>{
        const state=this.state
        state[e.target.name]=e.target.value;
        this.setState(state)
    }

   

    onSubmit=(e)=>{
        e.preventDefault();

        const{email,password, respo}=this.state
        console.log(email + ":"+ password)
        Axios.post('http://localhost:1234/api/login/loginAPI',{email,password, respo})
        .then(res => this.setState({respo: res.data}))
        console.log(respo+"resooooooooonseeeeeeee")
          if(respo=='password matched'){
                console.log(respo+"resooooooooonseeeeeeee")
              //  alert("username and password matched")
                //notify("dd")
            }
            else{
               // alert("credientials not matched")
               // document.title='not matched';
                //alert({notify})
                errornotify("ee")
            }
        
    }

    render() {
        const {email,password}=this.state;
        console.log(email+":"+password)
        return (
            <Container >
            <NavigationBar/>
            <h1></h1><br></br>
            <Form style={{marginTop:5.00}} onSubmit={this.onSubmit} className="mt-1">

    <Form.Group controlId="formBasicEmail">
    <Form.Label aria-setsize="20">email:</Form.Label>
    <Form.Control  type="text"  placeholder="Enter email" name="email" value={email} onChange={this.onChange}/>
       
    </Form.Group>  
      <Form.Group controlId="formBasicEmail">
      <Form.Label>password:</Form.Label>
      <Form.Control type="text" placeholder="Enter password" name="password" value={password} onChange={this.onChange}/> 
    </Form.Group>  
    
    <Button variant="dark"  type="submit">login</Button>
      </Form>
            </Container>
        )
    }
}

export default FormValidation





