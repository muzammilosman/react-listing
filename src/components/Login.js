import React, { useState } from 'react'
import { login } from '../utils/auth-service';
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const [errorMsg, setError] = useState();
    const [isSuccess, setSuccessMessage] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const loginBody = {
            email: event.target.username.value,
            password: event.target.password.value
        }
        login(loginBody).then((res) => {
            if(res){
                localStorage.setItem('access_token', res.data.tokens.access.token);
                localStorage.setItem('refresh_token', res.data.tokens.refresh.token);
            }
            setSuccessMessage(true);
            navigate('/')
        }).catch((err) => {
            setSuccessMessage(false)
            console.log(err);
            if(err.response){
                setError(err.response.data.message)
            } else {
                setError('Something went wrong!')
            }
        });
    }

  return (
    <div className='vertical-center login-form container m-auto'>
        <div className='m-auto col-md-6 align-items-center'>
            <div className='login-header'>
                <h2>Login</h2>
            </div>
            <div className='login-fields-list'>
                {
                    !isSuccess ? 
                    <div>
                        <p>{errorMsg}</p>
                    </div> : <></>
                }
                <form onSubmit={handleSubmit}>
                    <div className='login-field my-2'>
                        <input placeholder='username' name='username' type='text' />
                    </div>
                    <div className='login-field my-2'>
                        <input placeholder='password' name='password' type='password' />
                    </div>
                    <button className='btn-primary btn' type='submit'>
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
