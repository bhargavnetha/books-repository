import React from 'react'
import youtubeForm from './YoutubeForm.css'
import {useFormik} from 'formik'

const initialValues = {
    email:'',
    password:''
}

const onSubmit =  values=>{
    console.log(values, 'Form data')
}

const validate = values=>{
    let errors={}

    if(!values.email){
        errors.email='Required'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2-4}$/i.test(values.email)){
        errors.email='Invalid Format'
    }

    if(!values.password){
        errors.password='Required'
    }

    return errors
}

function YoutubeForm() {

    const formik = useFormik({
        
        initialValues,
        onSubmit,
        validate
        })

    //console.log('Form errors', formik.errors)
    return (
        <div>
            <form className={youtubeForm} onSubmit={formik.handleSubmit}>
             <div className='form-control'>
                <label htmlFor='email'>email</label>
                <input type='email' id='email'
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.email}/>
                {formik.errors.email ? (<div className='error'>{formik.errors.mail}</div>) : null}
             </div>

            <div className='form-control'>  
                <label htmlFor='password'>password</label>
                <input type='text' id='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}/>
                {formik.errors.password ? (<div className='error'>{formik.errors.password} </div>) : null}
            </div>
                <button>login</button>
            </form>
        </div>
    )
}

export default YoutubeForm
