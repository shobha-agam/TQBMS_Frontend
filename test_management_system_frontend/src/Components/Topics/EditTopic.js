import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const EditTopic = () => {
    const pk  = useParams(); // Get the topic id from the URl
    const id = pk.id
    console.log('edit topic id--', id)

    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch the topic data to pre-fill the form
        const fetchTopic = async () => {
            try {
                const token = localStorage.getItem('token');

                const response = await axios.get(`http://127.0.0.1:8000/gettopic/${id}`, {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  });
                setName(response.data.name);
                setDescription(response.data.description);
            } catch (error) {
                console.error('Error fetching the topic:', error);
            }
        };
        fetchTopic();
    }, [pk]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            // Assuming token is stored in localStorage
            console.log("edit topic token----", token)
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                  }
            };
            const data = { name, description };
            console.log("edit topic data---", data)
            const response = await axios.put(`http://127.0.0.1:8000/edittopic/${id}`,data, config);
            console.log("edit topic response=--", response.data)

            setMessage(response.data.msg);
            if (response.status === 202) {
                toast.success("Topic Updated Successfully.")
                    navigate('/topics');
            }
        } catch (error) {
            console.error('Error updating the topic:', error);
            setMessage('Error updating the topic.---');
        }
    };

    return (
        <>
        <div>
            <h2>Edit Topic</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Update Topic</button>
            </form>
            {message && <p>{message}</p>}
        </div>
        <ToastContainer/>
        </>
    );
};

export default EditTopic;
