import React, { useState } from 'react';
import './forms.css'
import { postData } from '../api/api.js'
const Forms = (props) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    assignee: '',
    project: '',
    startTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(formData, props.setUserData)
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className='heading'>Register</p>
      <label> ID: </label>
      <input type="text" name="id" value={formData.id} onChange={handleChange} />
      <br />
      <label> Name: </label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
      <br />
      <label> Assignee: </label>
      <input type="text" name="assignee" value={formData.assignee} onChange={handleChange} />
      <br />
      <label> Project: </label>
      <input type="text" name="project" value={formData.project} onChange={handleChange} />
      <br />
      <label> Start Time: </label>
      <input type="text" name="startTime" value={formData.startTime} onChange={handleChange} />
      <br />
      <div className="button">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Forms;
