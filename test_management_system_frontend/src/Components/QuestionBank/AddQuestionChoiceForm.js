import React, { useState } from "react";
import axios from "axios";

const AddQuestionChoiceForm = () => {
    const [question_id, setQuestion_id] = useState("");
    const [choice_text, setChoice] = useState("");
    const [description, setDescription] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    const handleQuestionChange = (event) => {
        setQuestion_id(event.target.value);
    };
    const handleChoiceChange = (event) => {
        setChoice(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setIsCorrect(event.target.checked);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem('token');

            const response = await axios.post(
                "http://127.0.0.1:8000/addquestionchoice/",
                {
                    question_id,
                    choice_text,
                    description,
                    is_correct: isCorrect,
                }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
            );
            console.log("New question choice added:", response.data);
            alert("Question choice added successfully!");
            handleChoiceChange("");
            handleDescriptionChange("");

            setIsCorrect(false); // Reset the form
        } catch (error) {
            console.error("Error adding question choice:", error);
            alert("An error occurred while adding question choice.");
        }
    };

    return (
        <>
            <div className="showcase">
                <div className="container">
                    <div className="login-container">
                        <h2>
                            Enter<span style={{ color: "rgb(162, 89, 32)" }}> Question </span>Choice
                        </h2>
         

                        <form
                            onSubmit={handleSubmit}
                            style={{ maxWidth: "350px", margin: "0 auto" }}
                        >
                            <input
                                type="text"
                                value={choice_text}
                                onChange={handleChoiceChange}
                                placeholder="Add Question Choice"
                                required
                                style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                            />
                            <input
                                type="text"
                                value={description}
                                onChange={handleDescriptionChange}
                                placeholder="Description"
                                required
                                style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
                            />

                            <input
                                type="checkbox"
                                checked={isCorrect}
                                onChange={handleCheckboxChange}
                            />
                            <button
                                type="submit"
                                style={{ marginTop: "40px", marginLeft: "80px" }}
                            >
                                Add Choice
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddQuestionChoiceForm;