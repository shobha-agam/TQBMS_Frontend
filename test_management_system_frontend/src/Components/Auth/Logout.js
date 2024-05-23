import React from 'react'
import './Login.css';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { resetLoginState } from '../../Redux/Feature/AuthSlices/LoginSlice';
 
function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear(); // Clear access token and other user data
        navigate('/');
        // dispatch an action to reset user login state in Redux
        dispatch(resetLoginState()); 
    };
    return (
        <>
            <div className='showcase' style={{}}>
                <div className="container">
                    <div className="login-container">
                        <h1 style={{ color: '#cf6717' }}>LogOut</h1>
                        <form action="#" className="form-login">

                            <div style={{ textAlign: 'center' }}>
                                <h2 >Are You Sure?</h2>
                            </div>

                            <div style={{textAlign:'center'}}>
                                <button className="btn-login"
                                    onClick={handleLogout}
                                    style={{
                                        flex: 1, flexDirection: 'row',
                                        marginHorizontal: 20,
                                        marginTop: 5,
                                       
                                    }} >
                                    Log Out
                                </button>
                            </div>

                            <div style={{textAlign:'center'}}>
                                <Link to='/topic' ><button className="btn-login"
                                    style={{
                                        flex: 1, flexDirection: 'row',
                                        marginHorizontal: 20,
                                        marginTop: 5,
                                        
                                    }} >
                                    Cancel
                                </button></Link>
                            </div>



                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Logout