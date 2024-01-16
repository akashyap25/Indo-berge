import React from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div id='contact' className="flex flex-wrap items-center justify-center bg-green-500">
        {/* Left Section - Contact Form */}
        <div className="w-full md:w-1/2 lg:w-1/3  p-8">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white-900 dark:text-white text-center">Contact Us</h2>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white-900 dark:text-white-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@example.com" required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white-900 dark:text-white-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-white-900 bg-white-50 rounded-lg border border-white-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white-900 dark:text-white-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-white-900 bg-white-50 rounded-lg shadow-sm border border-white-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Middle Section - Google Map Location */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center bg-white dark:bg-green-500 p-12">
          <iframe
            className="w-full h-96"
            title="Google Map"
            src="https://www.google.com/maps/d/embed?mid=1Y0J-7WiqNbHkG49b7jIS5TYhSq0&hl=en_US"
          />
        </div>

        {/* Right Section - Copyright, Contact Info, and Social Handles */}
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white dark:bg-green-500 p-8 flex items-center justify-center">
          <div className="text-white">
            <p className="text-center text-xl font-semibold mb-4">Email: info@example.com</p>
            <p className="text-center text-xl font-semibold mb-4">Contact: +01 234 567 89</p>
            <p className="text-center text-2xl font-semibold mb-4">© 2024 Your Company</p>
            
            {/* Social handles with react-icons */}
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={32} color="#fff" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={32} color="#fff" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={32} color="#fff" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={32} color="#fff" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
