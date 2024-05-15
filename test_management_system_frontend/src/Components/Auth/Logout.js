import React from 'react'
import './Login.css';

function Logout() {
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
                                    // onClick={handleLogout}
                                    style={{
                                        flex: 1, flexDirection: 'row',
                                        marginHorizontal: 20,
                                        marginTop: 5,
                                       
                                    }} >
                                    Log Out
                                </button>
                            </div>

                            <div style={{textAlign:'center'}}>
                                <button className="btn-login"
                                    style={{
                                        flex: 1, flexDirection: 'row',
                                        marginHorizontal: 20,
                                        marginTop: 5,
                                        
                                    }} >
                                    Cancel
                                </button>
                            </div>



                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Logout