import React from 'react';

const About = () => {
  return (
    <div id='about' className='container mx-auto p-24 text-black relative'>
      <div className="absolute inset-0 bg-white opacity-70 shadow-lg"></div>
      <div className="relative z-10">
        <h1 className='flex items-center justify-center text-5xl font-extrabold mb-16 text-green-500 transition duration-500 ease-in-out transform hover:scale-105 p-4 bg-white rounded-lg '>
          About Our Agro Venture
          <div className="absolute bottom-0 left-1/2 bg-orange-500 h-1 w-60 mt-10  transform -translate-x-1/2 transition-transform duration-300"></div>

        </h1>

        <ul className='list-disc pl-8 mb-4  text-xl font-medium '>
          <li className='mb-2 p-2 transition duration-500 ease-in-out transform hover:scale-105'>
            Welcome to AgroHarvest, your trusted partner in agro products and services. We are dedicated to delivering high-quality agricultural products and solutions to meet your farming needs.
          </li>
          <li className='mb-2 p-2 transition duration-500 ease-in-out transform hover:scale-105'>
            Our mission is to support farmers and promote sustainable agriculture practices. From seeds to organic fertilizers, we offer a wide range of products to enhance crop yields and promote soil health.
          </li>
          <li className='mb-2 p-2 transition duration-500 ease-in-out transform hover:scale-105'>
            At AgroHarvest, we are committed to providing innovative services that empower farmers. Whether you are a seasoned farmer or just starting, we have the tools, knowledge, and resources to help you succeed.
          </li>
          <li className='mb-2 p-2 transition duration-500 ease-in-out transform hover:scale-105'>
            We take pride in our green and orange color theme, representing growth, vitality, and the vibrancy of agriculture. Our team is passionate about contributing to a greener and healthier planet through sustainable farming practices.
          </li>
          <li className='mb-2 transition duration-500 ease-in-out transform hover:scale-105'>
            Thank you for choosing AgroHarvest. Join us on this journey towards a thriving and sustainable agricultural future!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
