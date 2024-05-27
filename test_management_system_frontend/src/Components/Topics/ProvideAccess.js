import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function ProvideAccess() {

    const topicid = useParams()
    const tid = topicid.id
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [access_level, setAccessLevel] = useState('')

    useEffect(() => {
        // Fetch user list from API
        axios.get('http://127.0.0.1:8000/allusers')
            .then(response => {
                console.log('users list--', response.data)
                setUsers(response.data); 
            })
            .catch(error => {
                console.error('Error fetching user list:', error);
            });
    }, []);

    const handleUserChange = (event) => {
        const selectedUsername = event.target.value;
        setSelectedUser(selectedUsername);
    };

    const handleAccessLevel = (event) => {
        const selectedAccessLevel = event.target.value;
        setAccessLevel(selectedAccessLevel);

    }
    const token = localStorage.getItem('token');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const response = axios.post(`http://127.0.0.1:8000/accesslevel/${selectedUser}`,
            {
                "topic": tid,
                "access_level": access_level
            }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        )
        .then(response => {
            console.log('provide access level response ----', response.data);
            if (response == 201)
               navigate('/topic') 
        })
        .catch(error => {
            console.error('Error providing access level:', error);
        });
    }


    return (
        <>
            <div className="container">
                <div className="login-container">

                    <form className="form-login" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="userSelect">Select user:</label>
                            <select id="userSelect" value={selectedUser} onChange={handleUserChange}>
                                <option value="">Select...</option>
                                {users.map((user) => (
                                    <option value={user.id}>
                                        {user.user_email}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor='access_level'>Select Access Level:</label>
                            <select value={access_level} onChange={handleAccessLevel}>
                                <option value="">Select...</option>
                                <option value="Editor">Editor</option>
                                <option value="Viewer">Viewer</option>
                            </select>
                        </div>

                        <div>
                            <button type='submit'>Give Access</button>
                        </div>
                        <div>
                            <Link to='/topic'><button type='submit'>Cancel</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProvideAccess