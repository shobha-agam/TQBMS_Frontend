import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


function AddQuestion() {
    const [formData, setFormData] = useState({
        id:'',
        topic_id: "",
        question: "",
        types: "single",
        difficulty: "beginner",
        estimated_time_to_solve: "",
        topic:{'name':'a'}
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            console.error("No token found");
            return;
        }

        try {
            const response = await axios.post(`http://127.0.0.1:8000/addquestion/`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log("response of add ques----", response.data)
            toast.success("Question added successfully.");
            navigate('/questionbank');
        } catch (err) {
            console.error(err);
            if (err.response && err.response.data) {
                toast.error(`Error: ${err.response.data.msg}`);
            } else {
                toast.error("Error Adding Question.");
            }
        }
    };

    return (
        <>
            <div className="showcase">
                <div className="container">
                    <div className="login-container">
                        <h1>
                            Add<span style={{ color: "#cf9934" }}>Question</span>
                        </h1>
                        <ToastContainer />
                        <form onSubmit={handleSubmit}
                            style={{ maxWidth: "350px", margin: "0 auto" }}>
                                <label>Qusetion ID</label>
                            <input
                                type="text"
                                name="id"
                                value={formData.id}
                                onChange={handleChange}
                                placeholder="question ID"
                                required
                                style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                            />
                                <label>Topic ID</label>
                            <input
                                type="text"
                                name="topic_id"
                                value={formData.topic_id}
                                onChange={handleChange}
                                placeholder="Topic ID"
                                required
                                style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                            />
                            <label>Question </label>
                            <input
                                type="text"
                                name="question"
                                value={formData.question}
                                onChange={handleChange}
                                placeholder="Question"
                                required
                                style={{ width: "100%", marginBottom: "10px", padding: "9px" }}
                            />
                            <label>
                                Type Choice
                                <select
                                    name="types"
                                    value={formData.types}
                                    onChange={handleChange}
                                    required
                                    style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                                >
                                    <option value="single">Single Choice</option>
                                    <option value="multiple">Multiple Choice</option>
                                </select>
                            </label>
                            <label>
                                Difficulty Level
                                <select
                                    name="difficulty"
                                    value={formData.difficulty}
                                    onChange={handleChange}
                                    required
                                    style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                                >
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="advance">Advance</option>
                                </select>
                            </label>
                            <label>
                                Estimated Time To Solve
                                <input
                                    type="text"
                                    name="estimated_time_to_solve"
                                    value={formData.estimated_time_to_solve}
                                    onChange={handleChange}
                                    placeholder="Estimated Time To Solve"
                                    required
                                    style={{ width: "100%", marginBottom: "10px", padding: "9px" }}
                                />
                            </label>
                            <button type="submit" style={{ marginTop: "40px", marginLeft: "80px" }}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddQuestion;