import React from 'react'
import './main.css';
// Add this at the top of your main component's JSX
import portaset from '../portaset/portaset';
import { useState } from 'react';


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
    
   <div className='main' style={{ display: "flex", alignItems: "center", gap: "1.5rem", float:"left" }}>
        <h1>Hey, it's me Priyansh</h1>
        </div>
      
      <p className='mm'>Welcome to my portfolio</p>
      <p className='jh'>Software Devloper</p> 
      
      
      <div className="box">
        <div className="box1">
          <h2>ReactJs</h2>
         
        </div>
        <div className="box1">
          <h2>Nodejs</h2>
          </div>
          <div className="box1">
          <h2>ExpressJs</h2>
         
        </div>
        <div className="box1">
          <h2>MongoDB</h2>
         
        </div>
        <div className="box1">
          <h2>NextJs</h2>
         
        </div>
          
          
        </div>
       
      <div className="form-container">
      <h2 className="form-title">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="form-label">
          Name:
          <input className="form-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" />
        </label>
        <label className="form-label">
          Email:
          <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" />
        </label>
        <label className="form-label">
          Mobile Number:
          <input className="form-input" type="tel" name="mobile" value={form.mobile} onChange={handleChange} placeholder="Enter your mobile number" />
        </label>
        <button className="form-submit" type="submit">Submit</button>
      </form>
    </div>
          
        
        <div>
        <h2 className="project">PROFILES</h2>
         <div >
        <a className="box2" href="https://github.com/priyanshsh234" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="box2" href="https://www.linkedin.com/in/priyanshsh/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="box2" href="https://leetcode.com/u/priyanshshukla930/" target="_blank" rel="noopener noreferrer">Leetcode</a>
        <a className="box2" href="priyanshshukla930@email.com" target="_blank" rel="noopener noreferrer">Email</a>
      </div>
      </div>
      
    </>
  )
}

export default Main