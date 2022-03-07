import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { register } from '../utils/auth-service';

export const RegisterForm = () => {

    const navigate = useNavigate();
    const [isSuccess, setSuccessMessage] = useState();
    const [errorMsg, setError] = useState();

    const createUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const userBody = {name, email, password};
        register(userBody).then((res) => {
            if(res.status === 201){
                setSuccessMessage(true);
                alert('User successfully created. Please login again');
                navigate('/login');
            }
        }).catch((err) => {
            if(err.response){
                setError(err.response.data.message)
            } else {
                setError('Something went wrong!')
            }
        })
    }

  return (
    <div className='container'>
        <div className='register-form-header'>
            <h1>CREATE USER</h1>
        </div>
        <div className='register-form vertical-center'>
            <form className='w-100' onSubmit={createUser}>
                <div className="form-group d-flex my-2">
                    <label htmlFor="name" className='w-25'>Name</label>
                    <input type="text" className="form-control text-left" name='name' placeholder="Name"/>
                </div>
                <div className="form-group d-flex my-2">
                    <label htmlFor="email" className='w-25'>Email</label>
                    <input type="email" className="form-control text-left" name='email' placeholder="Email"/>
                </div>
                <div className="form-group d-flex my-2">
                    <label htmlFor="password" className='w-25 text-left'>Cuisine</label>
                    <input type="password" className="form-control"  name='password' placeholder="Password"/>
                </div>
                {
                    !isSuccess ? 
                    <div className='text-center'>
                        <p>{errorMsg}</p>
                    </div> : <></>
                }
                <button type="submit" className="btn btn-primary my-2">Register</button>
            </form>
        </div>
    </div>
  )
}
