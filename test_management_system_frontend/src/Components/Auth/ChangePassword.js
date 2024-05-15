import React, { useEffect, useState } from 'react';
import './Login.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUsersPassword } from '../../Redux/Feature/AuthSlices/ChangePasswordSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ChangePassword() {
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, success, message } = useSelector((state) => state.changepass.changePassword);


    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(changeUsersPassword({ password, password2 }));
    };

    useEffect(() => {
        if (success) {
            setPassword('');
            setPassword2('');
            navigate('/');
            toast.success("successful")
        }
        if(password !== password2){
            toast.error("error")
        }
    }, [success, navigate]);


    return (

        <>
            <div className='showcase' style={{}}>
                <div className="container">
                    <div className="login-container">
                        <ToastContainer/>
                        <h2 style={{ color: '#cf6717' }}>Change Password</h2>
                        <form className="form-login" onSubmit={handleSubmit}>

                            <div className="textfield">
                                <label for="password"> New Password</label>
                                <input type="password" name="password" id='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required="" />
                            </div>

                            <div className="textfield">
                                <label for="password2">Confirm New Password</label>
                                <input type="password" name="password2" id='password2'
                                    value={password2}
                                    onChange={(e) => setPassword2(e.target.value)}
                                    required="" />
                            </div>


                            <button className="btn-login">Submit </button>
                           
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ChangePassword