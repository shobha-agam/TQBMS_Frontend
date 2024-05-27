import axios from 'axios';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteQuestion = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const deleteQuestion = async () => {
        const token = localStorage.getItem('token');

        try {
            const response = await axios.delete(`http://127.0.0.1:8000/deletequestion/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success(response.data.msg);
            navigate('/questionbank');
        } catch (error) {
            console.error('Error Deleting Question:', error);
            if (error.response && error.response.data) {
                toast.error(error.response.data.msg);
            } else {
                toast.error('Error Deleting Question');
            }
        }
    };

    return (
        <>
            <div>Delete Topic</div>
            <div className='container'>
                <div className="login-container">
                    <form className="form-login">
                        <div style={{ textAlign: 'center' }}>
                            <h2>Are You Really Want to Delete Question?</h2>
                        </div>
                        <div className="btn-cls">
                            <button
                                type="button"
                                className="ripple-btn"
                                onClick={deleteQuestion}
                                style={{ marginLeft: '28%' }}
                            >
                                Delete
                            </button>
                        </div>
                        <div className="btn-cls">
                            <Link to='/questionbank'>
                                <button
                                    type="button"
                                    className="ripple-btn"
                                    style={{ marginLeft: '28%' }}
                                >
                                    Cancel
                                </button>
                            </Link>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </>
    );
};

export default DeleteQuestion;
