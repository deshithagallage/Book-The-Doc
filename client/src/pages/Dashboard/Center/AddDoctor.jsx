/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie'; // Import


const token = Cookie.get('token'); // Get token from cookie
const AddDoctor = () => {
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    qualifications: '',
    gender: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       // Adjust as per your token storage method
      const config = {
        headers: {
          
            'x-auth-token': token
        }
      };
      const res = await axios.post('http://localhost:3000/api/doctors/adddoc', formData, config);
      console.log(res.data); // Handle success scenario
    } catch (err) {
      console.error('Error adding doctor:', err);
      // Handle error scenario
    }
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      specialization: '',
      qualifications: '',
      gender: ''
    });
  };

  return (
    <div className="add-doctor-form">
      <h2>Add New Doctor</h2>
      <form onSubmit={handleSubmit}>
        
      
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="specialization">Specialization:</label>
          <input type="text" id="specialization" name="specialization" value={formData.specialization} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="qualifications">Qualifications:</label>
          <input type="text" id="qualifications" name="qualifications" value={formData.qualifications} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="button-group">
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>

    </div>
  );
};

export default AddDoctor;
