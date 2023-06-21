import React, { useState } from 'react';
import './form.css'
function MyForm() {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    author: '',
    priority: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the form data
    console.log(formData);
  };

  return (
    <>
        <div className="formWrapper">
        <form onSubmit={handleSubmit}>
      <label>
      <div className="labeltext">ID:</div>
        <input
          type="text"
          className='formInput'
          name="id"
          value={formData.id}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <div className="labeltext"> Title:</div>
        <input
          type="text"
          className='formInput'
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      <div className="labeltext"> Author:</div>
        <input
          type="text"
          className='formInput'
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      <div className="labeltext">Priority:</div>
        <input
          type="text"
          className='formInput'
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
        </div>
    </>
  );
}

export default MyForm;
