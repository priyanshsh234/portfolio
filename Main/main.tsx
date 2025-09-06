import React, { useState } from 'react';
import './main.css';

const Main = () => {
  const [form, setForm] = useState({ name: '', email: '', mobile: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    alert('Submitted!');
    setForm({ name: '', email: '', mobile: '' });
  };

  return (
    <>
      <div className="main">
        <h1 className="priyansh">Hey, it's me Priyansh</h1>
      </div>

      <div className="intro">
        <p className="mm">Welcome to my portfolio</p>
        <p className="jh">Software Developer</p>
      </div>

      {/* ✅ Developer Image fixed on the right */}
      <img
        src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
        alt="Developer"
        className="developer-img"
      />

      <div className="box">
        <div className="box1"><h2>ReactJs</h2></div>
        <div className="box1"><h2>Nodejs</h2></div>
        <div className="box1"><h2>ExpressJs</h2></div>
        <div className="box1"><h2>MongoDB</h2></div>
        <div className="box1"><h2>NextJs</h2></div>
      </div>

      <div className="form-container">
        <h2 className="form-title">Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="form-label">
            Name:
            <input
              className="form-input"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </label>
          <label className="form-label">
            Email:
            <input
              className="form-input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </label>
          <label className="form-label">
            Mobile Number:
            <input
              className="form-input"
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
            />
          </label>
          <button className="form-submit" type="submit">Submit</button>
        </form>
      </div>

      <div className="profiles-section">
        <h2 className="project">PROFILES</h2>
        <div className="profile-links">
          <a className="box2" href="https://github.com/priyanshsh234" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="box2" href="https://www.linkedin.com/in/priyanshsh/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="box2" href="https://leetcode.com/u/priyanshshukla930/" target="_blank" rel="noopener noreferrer">Leetcode</a>
          <a className="box2" href="mailto:priyanshshukla930@email.com" target="_blank" rel="noopener noreferrer">Email</a>
        </div>
      </div>
    </>
  );
};

export default Main;
