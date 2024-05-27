import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTopic() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    console.log("add topic token==", token);

    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      const response = await axios.post(`http://127.0.0.1:8000/addtopic/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log("add topic-", response.data);
      navigate('/topic')
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <>
      <div className="showcase">
        <div className="container">
          <div className="login-container">
            <h1>
              Add<span style={{ color: "black" }}> Topic</span>
            </h1>
            <form
              onSubmit={handleSubmit}
              style={{ maxWidth: "350px", margin: "0 auto" }}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
          
                required
                style={{ width: "100%", marginBottom: "10px", padding: "8px", }}
              />
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                required
                style={{ width: "100%", marginBottom: "10px", padding: "9px" }}
              />
              <button type="submit" style={{ marginTop: "40px", marginLeft: "80px" }}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTopic;