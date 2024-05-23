import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const DeleteQuestion = () => {

    const id = useParams();
    console.log("delete questionbank compo user id---", id)
    const uid = id.id
    const navigate = useNavigate()

    //to delete user 
    const deleteQuestion = async () => {
        const token = localStorage.getItem('token');
        await axios.delete(`http://127.0.0.1:8000/deletequestion/${uid}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(toast.success("Question Deleted Succefully"),
            navigate('/questionbank')
        )
            .catch(err => console.log(err),
        toast.error('Error Deleting Question'))
    };
    return (
        <>
            <div>DeleteTopic</div>
            <div className='container'>
                <div className="login-container">

                    <form className="form-login" >
                        <div style={{ textAlign: 'center' }}>
                            <h2 >Are You Really Want to Delete Question?</h2>
                        </div>
                        <div className="btn-cls">
                            <button className="ripple-btn"
                                onClick={deleteQuestion}
                                style={{ marginLeft: '28%' }}>Delete</button>
                        </div>

                        <div className="btn-cls">
                            <Link to='/questionbank'><button className="ripple-btn"
                                style={{ marginLeft: '28%' }} >
                                Cancel</button></Link>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </>

    )
}

export default DeleteQuestion;