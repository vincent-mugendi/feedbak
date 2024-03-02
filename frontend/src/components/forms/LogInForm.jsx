import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogInForm.css';

const LogInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set loading state
    setLoading(true);

    fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to log in');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        // Redirect to dashboard or home page after successful login
        navigate('/dashboard');
        // Reset the form fields
        setFormData({ email: '', password: '' });
        setError('');
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Failed to log in');
      })
      .finally(() => {
        // Reset loading state
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="log-in-form">
      {error && <div className="error">{error}</div>}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Log In'}
      </button>
    </form>
  );
};

export default LogInForm;