import React from 'react'
import './NavBar.css';
import MessageForm from './MessageForm';
const AboutContent = () => {
  return (
    <>
    <div className="AboutContent">
       <h1>Welcome to MyWebsite</h1>
      <p>
        We are excited to offer you a variety of services to meet your needs. From booking appointments to learning more about our company, you’ll find everything you need here. 
        Our goal is to provide a seamless and user-friendly experience for all visitors. Feel free to explore our site and contact us if you have any questions.
      </p>
      <h2>Why Choose Us?</h2>
      <ul>
        <li>High-quality services tailored to your needs</li>
        <li>Friendly and professional staff</li>
        <li>Quick and easy appointment booking</li>
      </ul>
    </div>
    <div>
        <MessageForm/>
    </div>
    </>
  )
}

export default AboutContent