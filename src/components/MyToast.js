import React, { Component } from 'react'
import { Toast } from 'react-bootstrap'
import toastCss from './ToastCss.css'

export class MyToast extends Component {


    render() {

        const toastCs ={
            position: 'fixed',
            top: '10px',
            right: '10px',
            zIndex: '1',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }

        return (
            <div style={toastCs}>
                <Toast className={"border border-success bg-sucess text-white"}>
                    <Toast.Header className={"bg-success text-white"}closeButton={false}>
                        <strong className="mr-auto">Sucess</strong>
                    </Toast.Header>
                    <Toast.Body>
                        Book Saved Sucessfully!
                    </Toast.Body>
                </Toast>
            </div>
        )
    }
}

export default MyToast
