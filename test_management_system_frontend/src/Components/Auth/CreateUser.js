import React, { useState, useEffect } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createUser, resetCreateUserState } from '../../Redux/Feature/AuthSlices/SignupSlice';
import { toast } from 'react-toastify';

const CreateUser = () => {
    const [values, setValues] = useState({
        user_name: '',
        user_email: '',
        user_type: 'viewer',
        password: '',
        password2: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, success } = useSelector((state) => state.authsignup.createUser);

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(createUser(values));
    };

    useEffect(() => {
        if (success) {
            setValues({ user_name: '', user_email: '', user_type: 'viewer', password: '', password2: '' });
            // alert('Registration Successful!');
            toast.success("User Register Successfully.")
            navigate('/');
            
            dispatch(resetCreateUserState()); // Reset state after successful creation
        }
    }, [success, dispatch, navigate]);

    return (
        <>
            <div className='showcase'>
                <div className="container" style={{ marginTop: '2%',height: "100%" }}>
                    <div className="login-container">
                        <h1>Sign Up</h1>
                        <form className="form-login" onSubmit={handleSubmit}>
                            <div className="textfield">
                                <label for="user_email"> E-mail</label>
                                <input type="email" name="user_email" id="user_email" required
                                    // value={values.user_email}
                                    onChange={(e) => setValues({ ...values, user_email: e.target.value })} />
                            </div>
                            <div className="textfield">
                                <label for="user_name">Username</label>
                                <input type="text" name="user_name" id="user_name" required
                                    // value={values.user_name}
                                    onChange={(e) => setValues({ ...values, user_name: e.target.value })}/>
                            </div>

                            {/* <div className="textfield">
                                <label for="user_type">User Type</label>
                                <input type="text" name="user_type" id="user_type" required
                                    value={values.user_type}
                                    onChange={(e) => setValues({ ...values, name: e.target.value })}/>
                            </div> */}

                            <div className="textfield">
                                <label for="password"> Password</label>
                                <input type="password" name="password" id="password" required
                                    // value={values.password}
                                    onChange={(e) => setValues({ ...values, password: e.target.value })} />
                            </div>
                            <div className="textfield">
                                <label for="password2"> Confirm Password</label>
                                <input type="password" name="password2"id="password2" required
                                    // value={values.password2}
                                    onChange={(e) => setValues({ ...values, password2: e.target.value })}/>
                            </div>
                            <button className="btn-login">Sign Up </button>

                            <div style={{ textAlign: 'end' }} >
                                <a className="text--create-account" href='/'>Already Register,Login Here...</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CreateUser;