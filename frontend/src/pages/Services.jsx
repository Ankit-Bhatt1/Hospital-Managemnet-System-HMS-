import React from 'react';
import NavBar from '../components/NavBar';
import ServicesContent from '../components/ServicesContent';
import MessageForm from '../components/MessageForm';
const Services = () => {
  return (
    <>
    <div>
      <NavBar/>
      <ServicesContent/>
    </div>
    <div>
        <MessageForm/>
    </div>
    </>
  );
};

export default Services;
