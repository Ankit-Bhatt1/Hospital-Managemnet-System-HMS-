import React from 'react';
import './NavBar.css';

const ServicesContent = () => {
  return (
    <div className="ServicesContent">
      <h1>Our Services</h1>
      <p>
        At <strong>MyWebsite</strong>, we offer a wide range of services designed to meet the unique needs of our clients. Whether you're looking for professional advice, personal consultation, or comprehensive service packages, we have the expertise to help you.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>Personalized consultations to understand your requirements</li>
        <li>Expert solutions designed to meet industry standards</li>
        <li>24/7 customer support to assist you whenever you need it</li>
        <li>Flexible service packages tailored to fit your schedule and budget</li>
      </ul>

      <h2>Our Key Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>Consultation</h3>
          <p>We provide one-on-one consultations to fully understand your requirements and deliver custom solutions.</p>
        </div>
        <div className="service-item">
          <h3>Project Management</h3>
          <p>Our expert team can manage your projects from start to finish, ensuring timely and successful delivery.</p>
        </div>
        <div className="service-item">
          <h3>Technical Support</h3>
          <p>Our 24/7 support team is here to help you with any technical issues or queries you may have.</p>
        </div>
      </div>

      <h2>Why Choose Us?</h2>
      <p>
        We pride ourselves on delivering high-quality services that exceed client expectations. Our team is committed to providing tailored solutions that are not only efficient but also scalable and cost-effective.
      </p>
    </div>
  );
}

export default ServicesContent;
