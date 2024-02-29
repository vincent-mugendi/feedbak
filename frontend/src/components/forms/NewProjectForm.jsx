import React, { useState } from 'react';
import './NewProjectForm.css';

const NewProjectForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        deadline: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(formData); // Log the formData state after updating
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:5000/create_project', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Reset the form fields
            setFormData({
                title: '',
                description: '',
                deadline: ''
            });
        })
        .catch(error => {
            console.error('Error:', error);
            // Add additional error handling logic here
        });
    };

    return (
        <div className="form-card">
            <h4>Project Title</h4>
            <input
                type="text"
                placeholder="Project Title"
                className='input-field'
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            <h4>Description</h4>
            <textarea
                placeholder="Description"
                className='input-field'
                name="description"
                value={formData.description}
                onChange={handleChange}
            ></textarea>
            <label>Project Deadline: </label>
            <input
                type="date"
                name="deadline"
                id="project-deadline"
                value={formData.deadline}
                onChange={handleChange}
            />
            <br />
            {/* Add more fields as needed */}
            <button className='submit-button' onClick={handleSubmit}>Create Project</button>
        </div>
    );
};

export default NewProjectForm;
