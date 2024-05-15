import React from 'react'
import mbggg from '../Images/profile.png';
const UserProfile = () => {
    return (
        <>
            <div className="modal">
                {/* Modal content */}
                <div className="modal-content">
                    <div className="modal-header">
                        <div style={{
                            position: "absolute", top: "55%", left: "35%", width: '400px', padding: "30px ",
                            margin: "16px", transform: "translate(-20%, -50%)", background: " rgb(241, 234, 221)",
                            border: "solid #c27104 3px", boxShadow: '5px 5px #a87a3b', marginTop: '50px', borderRadius: '10px'
                        }}>

                            <div style={{ fontFamily: "Arial" }} className='w-50 borer bg-gray shadow px-5 pt-3 pb-5 rounded'>
                                <h2 style={{ textAlign: 'center', color: "#ed900e", marginTop: '5px', }}>User Profile</h2>
                                <hr></hr>
                            </div>
                            <div className="modal-body">
                                <div style={{ textAlign: 'center' }}>
                                    <img src={mbggg} style={{ textAlign: 'center', height: '145px', width: '155px', marginTop: '10px', }} alt="User profile picture" />
                                </div>
                                <div>
                                    <strong>User ID:</strong>
                                    <br />
                                    <strong>Name:</strong>
                                    <br />
                                    <strong>Email:</strong>
                                    <br />

                                    <strong>User Type:</strong>
                                    <br />
                                    <strong>Active Status:</strong>
                                    {/* {selectedUser?.is_active === true ? 'True' : 'False'} */}
                                    <br />
                                    <strong>Created At:</strong>
                                    <br />
                                    <strong>Updated At:</strong>
                                    <br />
                                </div>
                            </div >
                            <div style={{ textAlign: "center" }}>
                                <button style={{ color: "#fcfbfa", background: '#b07523' }} >Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile;