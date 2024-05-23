import React, { useEffect, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, resetLoginState } from '../../Redux/Feature/AuthSlices/LoginSlice';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// toast.configure();

const Login = () => {
    const [user_email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, success, userData } = useSelector((state) => state.authlogin.login);

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(login({ user_email, password }));
    };

    const notifySuccess = () => toast.success("Login Successfully");

    useEffect(() => {
        if (success) {
            notifySuccess();
            console.log('loged in usersdata--', userData)
            localStorage.setItem('token', userData.token['access']);
            const token = localStorage.getItem('token');
            // console.log("local storage get token=", token)
            localStorage.setItem('user_type', userData.user_type);
            localStorage.setItem('id', userData.id);
            const id = localStorage.getItem('id')
            console.log('loged in user id==', id)
            //   if (userData.user_type === 'viewer') {
            //     navigate('/getproperty');
            //   } else if (userData.user_type === 'admin') {
            //     navigate('/getpropertyforadmin');
            //   } else if (userData.user_type === 'owner') {
            //     navigate('/getpropertyforowner');
            //   } else {
            //     console.warn('Unexpected user role:', userData.user_type);
            //   }

            navigate('/dashboard')   
            dispatch(resetLoginState()); // Reset state after successful login
        }
    }, [success]);



    return (
        <>
            <div className='showcase'>
                <div className="container">
                    <div className="login-container">
                        <h1>Login</h1>
                        <form className="form-login" onSubmit={handleSubmit}>

                            <div className="textfield">
                                <label for="user_email"> E-mail</label>
                                <input type="email" name="user_email" id='user_email'
                                    value={user_email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </div>

                            <div className="textfield">
                                <label for="password"> Password</label>
                                <input type="password" name="password" id='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                            </div>

                            {/* <a className="forgot-password" href="#">Forget Password?</a> */}
                            <button className="btn-login" >Login </button>
                            <ToastContainer />
                            <a className="text--create-account" href="/signup">Create Account...</a>
                        </form>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Login;